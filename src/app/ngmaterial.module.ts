import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [ MatButtonModule, MatToolbarModule, MatListModule ],
  exports: [ MatButtonModule, MatToolbarModule, MatListModule ]
})
export class MaterialAppModule {}
