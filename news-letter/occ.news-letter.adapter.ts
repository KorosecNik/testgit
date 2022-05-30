import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { normalizeHttpError, Occ, OccEndpointsService } from '@spartacus/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewsLetterAdapter } from './news-letter.adapter';

@Injectable({
  providedIn: 'root',
})

export class OccNewsLetterAdapter implements NewsLetterAdapter {
  constructor(protected http: HttpClient, protected occEndpoints: OccEndpointsService) {}

  addNewsSubscriber(email: string): Observable<any> {
    const url = "https://localhost:9002/ggcommercewebservices/v2/hisense-rs/subscribers?subscriberEmail=" + email;
    return this.http.post(url, null).pipe(catchError(error => throwError(normalizeHttpError(error))));
  }
}
