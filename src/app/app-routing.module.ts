import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CveListComponent } from './cve-list/cve-list.component';
import { CveYearDetailComponent } from './cve-year-detail/cve-year-detail.component';

const routes: Routes = [
  { path: 'cves', component: CveListComponent},
  { path: 'cves/:id', component: CveYearDetailComponent }
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]})
export class AppRoutingModule { }
