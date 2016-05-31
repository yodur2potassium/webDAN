import { Component, Input } from "@angular/core";

import { Error } from "./error";
import { ErrorService } from "./error.service";

@Component ({
  selector: 'my-error-detail',
  template: `
    <div id="erreurDetail" *ngIf="error" (click)="getLinkedTo()">
      <p>{{error.description}}</p>
      <ul>
        <li *ngFor="let doc of error.documentations">
          <a href="{{doc.source}}">Lien vers ressources externes en {{doc.lang}}</a>
        </li>
      </ul>
    </div>
  `,
})

export class ErrorDetailComponent {
  @Input()
  error: Error;

  getLinkedTo(){
    console.log(this.error);
    // this.error.getLinkedTo();
  }
}
