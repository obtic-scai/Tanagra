import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// #####################################

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';

import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatSliderModule} from '@angular/material/slider';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';


import { NotFoundComponent } from './not-found/not-found.component';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ToastrModule } from 'ngx-toastr';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    SideNavComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // #####################################

    LeafletModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatSliderModule,

    MatChipsModule,
    LeafletMarkerClusterModule,
    MatTooltipModule,
    NgxSliderModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      easing:'ease-in',
      positionClass:"toast-top-center"
    }),

  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
