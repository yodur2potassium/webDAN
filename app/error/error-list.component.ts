// ErrorListComponent, WORK IN PROGRESS

import { Component } from "@angular/core";

import { Error } from "./error";


@Component({
    selector: 'my-error-list',
    template: `<div> Error list </div>`,

})
export class ErrorListComponent {
  errors: Array<Error>;
  selectedError: Error;

}
