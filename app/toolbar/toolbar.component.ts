import { Component,Input, Output, EventEmitter } from "@angular/core";

import { SearchComponent } from "../search/search.component";
import { ErrorListComponent } from "../error/error-list.component";
import { Error } from "../error/error";


@Component ({
  selector: 'my-toolbar',
  template:`
    <div id="toolbar" class="input-group" aria-label="...">
        <div class="input-group-btn">
          <my-error-list [errors]="errors" (emitDetailError)="onSelect($event)"></my-error-list>
          <button class="btn btn-default" (click)="displayErrors()">Afficher les erreurs de la page</button>
        </div>
        <my-search [errors]='errors'></my-search>
    </div>
  `,
  directives: [SearchComponent, ErrorListComponent],
  styles: [`
    #toolbar{
        background-color: lightgreen;
        min-height: 15px;
    }`]
})

export class ToolbarComponent{
  @Input() errors: Error[];
  @Output() emitShowError: EventEmitter<any> = new EventEmitter();
  @Output() emitDetailError: EventEmitter<any> = new EventEmitter();


  public displayErrors(){
    this.emitShowError.emit('DISPLAY_ERRORS');
  }
  public onSelect($event){
    let error = $event;
    this.emitDetailError.emit(error);
  }


}
