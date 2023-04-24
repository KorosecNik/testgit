import { Observable } from 'rxjs';

export abstract class NewsLetterAdapter {

  abstract addNewsSubscriber(email: string): Observable<any>;

}

console.log("test1");
console.log("fsdfsdfsdfsd");
