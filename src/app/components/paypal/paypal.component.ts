import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Product } from '../../data/products';
import { ShippingOption, ShippingOptions } from '../../data/shippingOptions';
import { currencyCode, DONATION, HANDLING_FEE, PAYMENT_FEE, SHIPPING_FEE } from '../../data/global';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit, OnChanges {

  @Input() selectedShippingOption: ShippingOption;
  constructor(public cartService: CartService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedShippingOption'] !== undefined) {
      if (changes['selectedShippingOption'].currentValue !== changes['selectedShippingOption'].previousValue) {
        if (changes['selectedShippingOption'].previousValue !== undefined) {
          this.clearButtons();
        }
        this.initButtons(changes['selectedShippingOption'].currentValue.price);
      }
    }
  }

  clearButtons() {
    document.querySelector('#paypal-button-container').innerHTML = '';
  }

  initButtons(price: number) {
    const _cartService = this.cartService;
    const description = _cartService.selectedBox.name;
    const _DONATION = DONATION;
    const _SHIPPING_FEE = SHIPPING_FEE;
    const _PAYMENT_FEE = PAYMENT_FEE;
    const _HANDLING_FEE = HANDLING_FEE;
    const _buttonContainer = document.querySelector('#paypal-button-container');

    const items: any[] = _cartService.products.map((prod: Product) => {
      return {
        name: prod.selectedProductVariation ? prod.selectedProductVariation.name : prod.name,
        unit_amount: {
          value: parseFloat(prod.price.toString()).toFixed(2),
          currency_code: currencyCode
        },
        quantity: 1,
        sku: prod.selectedProductVariation ? prod.selectedProductVariation.name : prod.name,
      };
    });
    items.push({
      name: _DONATION,
      unit_amount: {
        value: parseFloat(_cartService.calculateDonation().toString()).toFixed(2),
        currency_code: currencyCode
      },
      quantity: 1,
      sku: _DONATION
    });
    items.push({
      name: _PAYMENT_FEE,
      unit_amount: {
        value: parseFloat(_cartService.calculatePaymentFee(price).toString()).toFixed(2),
        currency_code: currencyCode
      },
      quantity: 1,
      sku: _PAYMENT_FEE
    });
    if (this.selectedShippingOption.name === ShippingOptions.filter((x: ShippingOption) => x.name.indexOf('DHL') > -1)[0].name) {
      items.push({
        name: _SHIPPING_FEE,
        unit_amount: {
          value: parseFloat(_cartService.calculateShippingCosts().toString()).toFixed(2),
          currency_code: currencyCode
        },
        quantity: 1,
        sku: _SHIPPING_FEE
      });
    }
    const currentTotal = items.reduce((x, y) => x + parseFloat(y.unit_amount.value), 0);
    items.push({
      name: _HANDLING_FEE,
      unit_amount: {
        value: parseFloat(_cartService.calculateProvision(price, currentTotal).toString()).toFixed(2),
        currency_code: currencyCode
      },
      quantity: 1,
      sku: _HANDLING_FEE
    });
    items.map(x => console.log(x));
    (window as any).paypal.Buttons(
      {
        createOrder : function(data, actions) {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [{
              amount: {
                description: description,
                currency_code: currencyCode,
                value: price,
                breakdown: {
                  item_total: {
                    value: price,
                    currency_code: currencyCode
                  },
                }
              },
              items: items
            }]
          });
        },
        onApprove: function(data, actions) {
          // This function captures the funds from the transaction.
          return actions.order.capture().then(function(details) {
            // This function shows a transaction success message to your buyer.
            _buttonContainer.innerHTML = 'Danke für deinen Einkauf. Wir haben dir eine E-Mail gesendet.';
            _buttonContainer.className = 'alert alert-primary';
            _cartService.sendEmail(details);
          });
        }
      }
    ).render('#paypal-button-container');
  }
}
