import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Base } from './base';

@Injectable()
export class BaseService {
  private basesUrl = 'http://localhost:8080/bases';
  
  constructor (private http: Http) {}

  getBases(): Observable<Base[]> {
    return this.http.get(this.basesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  createBase(base: Base): Observable<Base> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.basesUrl, base, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }  

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}