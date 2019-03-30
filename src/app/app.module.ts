import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// services
import { MapService } from './services/map/map.service';

import { AppComponent } from './app.component';
import { MapRoutesComponent } from './components/map-routes/map-routes.component';

@NgModule({
  declarations: [
    AppComponent,
    MapRoutesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
