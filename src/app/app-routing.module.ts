import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './pages/places/places.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  {path: "", redirectTo: "/places", pathMatch: "full"},
  {path: "places", component: PlacesComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "messages", component: MessagesComponent},
  {path: "wishlist", component: WishlistComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
