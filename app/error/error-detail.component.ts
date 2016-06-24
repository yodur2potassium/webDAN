// Importe Component pour la déclaration et Input pour récuperer les donnée du parent
import { Component, Input } from "@angular/core";

import { Error } from "./error";

@Component ({
  selector: 'my-error-detail',
  template: `
    <div class="panel panel-info" *ngIf="error" (click)="getLinkedTo()">
      <div class="panel-heading">
        <h3 class="panel-title">Détail de l'erreur</h3>
      </div>
      <div class="panel-body">
        <h4>Description :</h4>
        <p>{{error.title}}</p>
        <h4>Correction :</h4>
        <p>{{ error.description }}</p>
        <h4>Documentation :</h4>
        <ul>
          <li *ngFor="let doc of error.documentations">
            <a href="{{doc.source}}">Lien vers ressources externes en {{doc.lang}}</a>
          </li>
        </ul>
      </div>
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
