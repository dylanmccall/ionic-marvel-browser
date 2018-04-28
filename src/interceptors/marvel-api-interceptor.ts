import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import MD5 from 'crypto-js/md5';
import format from 'string-format';

import config from '../config';

const {API_PUBLIC_KEY, API_PRIVATE_KEY} = config;

@Injectable()
export class MarvelAPIInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.startsWith('https://gateway.marvel.com:443/')) {
      return next.handle(this._addAPIKey(request));
    } else {
      return next.handle(request);
    }
  }

  _addAPIKey(request: HttpRequest<any>) : HttpRequest<any> {
    const ts = Date.now().toString();
    const publicKey = API_PUBLIC_KEY;
    const privateKey = API_PRIVATE_KEY;
    const hash = MD5(
      format("{ts}{privateKey}{publicKey}", {ts, privateKey, publicKey})
    );
    const params = request.params
      .set('ts', ts)
      .set('apikey', publicKey)
      .set('hash', hash);
    return request.clone({params});
  }
}
