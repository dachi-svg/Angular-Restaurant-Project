import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { NavigationComponent } from './ImportantParts/navigation/navigation.component';
import { FooterComponent } from './ImportantParts/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './pages/error/error.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AboutusComponent,
    NavigationComponent,
    FooterComponent,
    ErrorComponent,
    DetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
