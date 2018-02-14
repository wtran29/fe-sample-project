import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ProductManageComponent } from './product/product-manage/product-manage.component';

// meant to be auth.service
import { UserService } from './user/user.service';
import { ListService } from './product/list.service';
import { ProductService } from './product/product.service';
import { ProductCartComponent } from './product/product-cart/product-cart.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    ProductManageComponent,
    ProductCartComponent,
    ProductCreateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule
  ],
  providers: [UserService, ProductService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
