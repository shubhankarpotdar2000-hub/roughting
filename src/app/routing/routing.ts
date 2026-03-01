import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDashboardComponent } from '../components/users-dashboard/users-dashboard.component';
import { ProductsDashboardComponent } from '../components/products-dashboard/products-dashboard.component';
import { FairsDashboardComponent } from '../components/fairs-dashboard/fairs-dashboard.component';
import { UsersFormComponent } from '../components/users-form/users-form.component';
import { UserComponent } from '../components/user/user.component';
import { ProductsFormComponent } from '../components/products-form/products-form.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },

  {
    path: 'users',
    component: UsersDashboardComponent,
  },

  {
    path: 'users/add',
    component: UsersFormComponent,
  },

  {
    path: 'users/:usersId/edit',
    component: UsersFormComponent,
  },

  {
    path: 'users/:usersId',
    component: UserComponent,
  },

  {
    path: 'products',
    component: ProductsDashboardComponent,
  },
  {
    path : 'products/addproducts',
    component: ProductsFormComponent,
  },

  {
    path : 'products/:productId',
    component: ProductDetailsComponent,
  },
  {
    path: 'products/:productId/edit',
    component: ProductsFormComponent
  },

  {
    path: 'fairs',
    component: FairsDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}