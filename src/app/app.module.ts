import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotlyThreeDModelComponent } from './plotly-three-d-model/plotly-three-d-model.component';

@NgModule({
  declarations: [
    AppComponent,
    PlotlyThreeDModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
