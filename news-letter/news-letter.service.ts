import {Injectable} from "@angular/core";
import {NewsLetterConnector} from "../data-bindings/news-letter/news-letter.connector";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class NewsLetterService {
    constructor(protected newsletterConnector: NewsLetterConnector) {}

    addNewsSubscriber(email: string): Observable<any> {
        return this.newsletterConnector.addNewsSubscriber(email);
    }
}