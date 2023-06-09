import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatMenuModule} from '@angular/material/menu';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { PlacesComponent } from './pages/places/places.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { TableModule } from 'primeng/table';
import { AccountComponent } from './pages/account/account.component';
import { TripsComponent } from './pages/trips/trips.component';
import { HelpComponent } from './pages/help/help.component';
import { GalleriaModule } from 'primeng/galleria';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { RentsComponent } from './pages/rents/rents.component';
import { MypropertiesComponent } from './pages/myproperties/myproperties.component';
import { AccountMenuComponent } from './pages/account-menu/account-menu.component';
import { PropertyAddComponent } from './pages/property-add/property-add.component';
import { CalendarModule } from 'primeng/calendar';
import { PlaceComponent } from './pages/place/place.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PlacesComponent,
    RegisterComponent,
    LoginComponent,
    MessagesComponent,
    MessageListComponent,
    MessageDetailComponent,
    WishlistComponent,
    AccountComponent,
    TripsComponent,
    HelpComponent,
    RentsComponent,
    MypropertiesComponent,
    AccountMenuComponent,
    PropertyAddComponent,
    PlaceComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatFormFieldModule,
    CarouselModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    GalleriaModule,
    OverlayPanelModule,
    ButtonModule,
    SplitButtonModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    MultiSelectModule,
    CalendarModule
  ],
  providers: [
    AuthService,
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
    },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
