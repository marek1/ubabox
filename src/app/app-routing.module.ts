import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { CartComponent } from './components/cart/cart.component';
import { ROUTE_CART, ROUTE_CREATE_BOX } from './routes';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ROUTE_CREATE_BOX,
    component: CreateComponent
  },
  {
    path: ROUTE_CREATE_BOX + '/:id',
    component: CreateComponent
  },
  {
    path: ROUTE_CART,
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
