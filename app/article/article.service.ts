// ArticleService, assure la connexion avec l'API

// Rends le Component injectable comme service
import { Injectable } from '@angular/core';
// Importe le service HTTP et headers
import { Http, Headers } from '@angular/http';
// Importe une fonction pour convertir l'Observable en Promise
import 'rxjs/add/operator/toPromise';

import { Article } from './article';

@Injectable()

export class ArticleService{
    // URL de l'API
    private artUrl = "http://localhost:8000/api/articles";

    constructor(private http: Http) {}
    // Retourne une promesse de type tableau d'Article en json
    getArticles(): Promise<Article[]>{

        // return ARTICLES;
        return this.http.get(this.artUrl)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError);
    }
    // Renvoie une erreur si pb de connexion, à améliorer
    private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
