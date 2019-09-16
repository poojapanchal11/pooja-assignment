import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualComponent } from './visual/visual.component';
import { CsvComponent } from './csv/csv.component';
import { MsqlVisualComponent } from './msql-visual/msql-visual.component';
import { CsvVisualComponent } from './csv-visual/csv-visual.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualComponent,
    CsvComponent,
    MsqlVisualComponent,
    CsvVisualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
