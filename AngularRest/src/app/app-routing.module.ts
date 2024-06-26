import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ErrorComponent } from './pages/error/error.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/home/details/details.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cart", component: CartComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "contacts", component: ContactComponent},
  {path: "details", component: DetailsComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
