import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TokenInterceptor } from './users/interceptors/token.interceptor';
import { AuthInterceptor } from './users/interceptors/auth.interceptor';
import { ListarComponent } from './persona/listar/listar.component';
import { PagesComponent } from './seminario/presentation/pages/pages.component';
import { ViewsComponent } from './seminario/presentation/views/views.component';
const routes: Routes=[
  {path: '', component: PageLoginComponent},
  {path: '**', redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
  ],
  imports: [
    BrowserModule, CoreModule,AppRoutingModule,HttpClientModule, FormsModule, ReactiveFormsModule 
  ],
  providers: [
  /*{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}*/
    // {provide:MenuService, useClass: MenuService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
