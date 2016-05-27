// ErrorListComponent, WORK IN PROGRESS

import { Component } from "@angular/core";

import { Error } from "./error";
import { ErrorService } from "./error.service";



@Component({
    selector: 'my-error-list',
    template: `<div (click)="getErrors()">
                  <h3>Click</h3>
                  <ul>
                    <li *ngFor="let error of errors" (click)="onSelect(error)">
                      <h4>{{error.title}}</h4>
                      <p>{{error.description}}</p>
                  </ul>
              </div>
              `,
    providers: [ErrorService],
})
export class ErrorListComponent {
  errors: Error[];
  selectedError: Error;
  failed: any;

  constructor(private _errService: ErrorService) {}

  getErrors(){
    this._errService.getErrors().then(response => this.errors = response)
                                .catch(failed => this.failed = failed) // This is a connexion error
  }

  onSelect(error: Error){
    this.selectedError = error;
    console.log('plop');
  }
}
