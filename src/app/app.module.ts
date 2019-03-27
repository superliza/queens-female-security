import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// services
import { MapService } from './services/map.service';

import { AppComponent } from './app.component';
import { RoutesComponent } from './components/routes/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent
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
