import { Component,Input, Output, EventEmitter } from "@angular/core";

import { SearchComponent } from "../search/search.component";
import { ErrorListComponent } from "../error/error-list.component";
import { Error } from "../error/error";


@Component ({
  selector: 'my-toolbar',
  template:`
    <div id="bandeau-superieur" class="row">
        <div class="col-md-4">
          <my-error-list [errors]="errors"></my-error-list>
        </div>
        <my-search [errors]='errors'></my-search>
        <div class="col-md-4">
          <button (click)="displayErrors()">Afficher les erreurs de la page</button>
        </div>
    </div>
  `,
  directives: [SearchComponent, ErrorListComponent],
  styles: [`
    #bandeau-superieur{
        background-color: lightgreen;
        min-height: 15px;
    }
    div {
      padding: 3px
    }
    `]
})

export class ToolbarComponent{
  @Input() errors: Error[];
  @Output() errorDisplayed: EventEmitter<any> = new EventEmitter();
  errorsVisible: boolean = false;

  public displayErrors(){
    this.errorDisplayed.emit('Plop');
  }


}
