import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ServerService } from './server.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CveListComponent } from './cve-list/cve-list.component';
import { CveYearDetailComponent } from './cve-year-detail/cve-year-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CveListComponent,
    CveYearDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ServerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
