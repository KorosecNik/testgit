import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsLetterAdapter } from './news-letter.adapter';

@Injectable()
export class NewsLetterConnector {
  constructor(protected adapter: NewsLetterAdapter) {}

  addNewsSubscriber(email: string): Observable<any> {
    return this.adapter.addNewsSubscriber(email);
  }

}