// Importe Component pour la déclaration et Input pour récuperer les donnée du parent
import { Component, Input } from "@angular/core";

import { Error } from "./error";
import { ErrorService } from "./error.service";

@Component ({
  selector: 'my-error-detail',
  template: `
    <div id="erreurDetail" *ngIf="error" (click)="getLinkedTo()">
      <h4>{{ error.title }}</h4>
      <strong>Correction :</strong>
      <p>{{ error.description }}</p>
      <ul>
      <strong>Documentation :</strong>
        <li *ngFor="let doc of error.documentations">
          <a href="{{doc.source}}">Lien vers ressources externes en {{doc.lang}}</a>
        </li>
      </ul>
    </div>
  `,
})

export class ErrorDetailComponent {
  // Assigne l'erreur sélectionnée depuis le parent
  @Input()
  error: Error;

  // WIP, récupère la cible de l'erreur...
  getLinkedTo(){
    console.log(this.error);
    if(this.error.article){
      console.log('plop');
    }
  }
}
