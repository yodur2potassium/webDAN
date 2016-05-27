// ErrorService, assure la connexion avec l'API

// Rends le Component injectable comme service
import { Injectable } from '@angular/core';
// Importe le service HTTP et headers
import { Http, Headers } from '@angular/http';
// Importe une fonction pour convertir l'Observable en Promise
import 'rxjs/add/operator/toPromise';

import { Error } from './error';

@Injectable()

export class ErrorService{
    // URL de l'API
    private errorURL = "http://localhost:8000/api/errors";

    constructor(private http: Http) {}
    // Retourne une promesse de tableau de type Error en json
    getErrors(): Promise<Error[]>{

        return this.http.get(this.errorURL)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError);
    }

    getError(id: number) {
        return this.getErrors()
                    .then(errors => errors.filter(error => error.id === id)[0]);
  }
    // Renvoie une erreur si pb de connexion, à améliorer
    private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
