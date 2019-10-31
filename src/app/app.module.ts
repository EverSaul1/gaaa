import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ClienteIndexComponent } from './cliente-index/cliente-index.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { HolaComponent } from './hola/hola.component';
import { FormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { LoginComponent } from './login/login.component';
import { DpermisoComponent } from './dpermiso/dpermiso.component';
import { DpermisoListComponent } from './dpermiso-list/dpermiso-list.component';
 import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'dpremiosList',  component: DpermisoListComponent  },
  { path: 'dpremios',  component: DpermisoComponent},
  { path: 'depremios/:id', component: DpermisoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products',  component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'shipping', component: ShippingComponent },

  { path: 'clienteindex',  component: ClienteIndexComponent },
  { path: 'clienteform',  component: ClienteFormComponent },
  { path: 'clienteform/:id',  component: ClienteFormComponent },
  

  { path: '**', component: PageNotFoundComponent },

];
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1045461569054-ik9s8ib2dhr7drjs67brq60j0hilsrvu.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ClienteIndexComponent,
    ClienteFormComponent,
    HolaComponent,
    LoginComponent,
    DpermisoComponent,
    DpermisoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      
      
    )
  ],
  providers: [{
    provide: AuthServiceConfig,
      useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
