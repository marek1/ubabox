export interface ShippingOption {
  name: string;
  price: number;
}
export const ShippingOptions: ShippingOption[] = [
  {
    name: 'Abholung',
    price: 26.11
  },
  {
    name: 'Versand mit DHL',
    price: 30
  }
];
