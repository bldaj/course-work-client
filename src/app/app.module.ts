import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialAppModule } from './ngmaterial.module';

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
    BrowserAnimationsModule,
    MaterialAppModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ ServerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
