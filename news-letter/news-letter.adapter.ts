import { Observable } from 'rxjs';

export abstract class NewsLetterAdapter {

  abstract addNewsSubscriber(email: string): Observable<any>;

}

console.log("test2");
console.log("test");