import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
