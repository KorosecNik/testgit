import { Observable } from 'rxjs';

export abstract class NewsLetterAdapter {

  abstract addNewsSubscriber(email: string): Observable<any>;

}

console.log("test1");
console.log("test2");
console.log("test3");
console.log("test4");
console.log("test5");