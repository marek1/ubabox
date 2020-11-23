import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVariationComponent } from './product-variation.component';

describe('ProductVariationComponent', () => {
  let component: ProductVariationComponent;
  let fixture: ComponentFixture<ProductVariationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVariationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
