import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RestaurantFoodsComponent } from './components/restaurant-foods/restaurant-foods.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './service/auth.guard';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { FoodDetailsComponent } from './components/admin/food-details/food-details.component';
import { UpdateFoodComponent } from './components/admin/update-food/update-food.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AddFoodComponent } from './components/admin/add-food/add-food.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { PendingOrdersComponent } from './components/admin/pending-orders/pending-orders.component';
import { SuccessMessageComponent } from './components/success-message/success-message.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate: [AuthGuard],
    data: { expectedRole: 'NORMAL' }


  },

  {
    path: 'restaurant/foods/:restaurantId/:restaurantName',
    component:RestaurantFoodsComponent,
    pathMatch:'full',
    canActivate: [AuthGuard],
    data: { expectedRole: 'NORMAL' }


  },

  {
    path:'cart',
    component:CartComponent,
    pathMatch:'full',
    canActivate: [AuthGuard],
    data: { expectedRole: 'NORMAL' }


  },

  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },

  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },

  {
    path:'admin/dashboard',
    component:AdminDashboardComponent,
    pathMatch:'full',
    canActivate: [AuthGuard],
    data: { expectedRole: 'ADMIN' }
  },

  {
    path:'admin/food-details/:foodId',
    component:FoodDetailsComponent,
    pathMatch:'full',
    canActivate:[AuthGuard],
    data: { expectedRole: 'ADMIN' }

  },

  {
    path:'admin/food-details/update/:foodId',
    component:UpdateFoodComponent,
    pathMatch:'full',
    canActivate:[AuthGuard],
    data: { expectedRole: 'ADMIN' }

  },
  {
    path: 'admin/dashboard/management',
    component:AdminProfileComponent,
    pathMatch:'full',
    canActivate: [AuthGuard],
    data: { expectedRole: 'ADMIN' }

  },

  {
    path:'admin/dashboard/orders',
    component:OrdersComponent,
    pathMatch:'full',
    canActivate: [AuthGuard],
    data: { expectedRole: 'ADMIN' }

  },

  {
    path:'admin/dashboard/food/add',
    component:AddFoodComponent,
    pathMatch:'full',
    canActivate:[AuthGuard],
    data: { expectedRole: 'ADMIN' }

  },

  {
    path:'admin/dashboard/orders/pending-orders',
    component:PendingOrdersComponent,
    pathMatch:'full',
    canActivate:[AuthGuard],
    data: { expectedRole: 'ADMIN' }

  },

  {
    path:'verify',
    component:SuccessMessageComponent,
    pathMatch:'full',
  },


  

  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
