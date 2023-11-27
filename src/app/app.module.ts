import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestaurantFoodsComponent } from './components/restaurant-foods/restaurant-foods.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CartComponent } from './components/cart/cart.component';
import { MatListModule } from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { JwtInterceptor } from './service/jwt-interceptor';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FoodDetailsComponent } from './components/admin/food-details/food-details.component';
import { UpdateFoodComponent } from './components/admin/update-food/update-food.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AddFoodComponent } from './components/admin/add-food/add-food.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { PendingOrdersComponent } from './components/admin/pending-orders/pending-orders.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { SuccessMessageComponent } from './components/success-message/success-message.component';

@NgModule({
  
  declarations: [
    AppComponent,
    DashboardComponent,
    RestaurantCardComponent,
    RestaurantFoodsComponent,
    NavbarComponent,
    CartComponent,
    SignupComponent,
    LoginComponent,
    AdminDashboardComponent,
    FoodDetailsComponent,
    UpdateFoodComponent,
    AdminProfileComponent,
    AddFoodComponent,
    OrdersComponent,
    PendingOrdersComponent,
    SuccessMessageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatPaginatorModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot(
      {
        showForeground:true
      }
    ) // import NgxUiLoaderHttpModule. By default, it will show background loader.



    
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
