import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {
  private id: any;

  constructor(private http: HttpClient) { }

  getAvailableCVEs() {
    return this.http.get('http://localhost:9090')
      .map(res => res);
  }

  getCVEData(CVEcollection): Observable<any> {
    this.id = CVEcollection.split('-')[1];
    return this.http.get('http://localhost:9090/' + this.id);
  }
}
