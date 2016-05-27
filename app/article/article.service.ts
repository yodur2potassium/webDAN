import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Article } from './article';

@Injectable()

export class ArticleService{

    private artUrl = "http://localhost:8000/api/test";

    constructor(private http: Http) {}

    getArticle(): Promise<Article>{

        return this.http.get(this.artUrl)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError);
    }

    private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
