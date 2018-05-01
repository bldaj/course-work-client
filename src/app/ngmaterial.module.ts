import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [ MatButtonModule, MatToolbarModule, MatListModule, MatTableModule ],
  exports: [ MatButtonModule, MatToolbarModule, MatListModule, MatTableModule ]
})
export class MaterialAppModule {}
