// ErrorListComponent, WORK IN PROGRESS
// Importe Component pour la déclaration et OnInit pour lancer le service et fetch les donnée au demarrage du Component
import { Component } from "@angular/core";
// Importe classe Error et le service pour recup données sur API
import { Error } from "./error";
import { ErrorService } from "./error.service";
import { ErrorDetailComponent } from "./error-detail.component";

// Déclare la balise HTML custom et le template
// Parcours le tableau d'erreurs, les affiche et les rends cliquable
// Appelle le composant error-detail sur l'erreur selectionnée
@Component({
    selector: 'my-error-list',
    template: `<div (click)="getErrors()">
                  <h3>Click</h3>
                  <ul>
                    <li *ngFor="let error of errors" (click)="onSelect(error)">
                      <h4>{{error.accede_code}} - {{error.title}}</h4>
                      <my-error-detail [error]="selectedError"></my-error-detail>
                    </li>
                  </ul>
              </div>
              `,
    directives: [ErrorDetailComponent],
})
export class ErrorListComponent {
  errors: Error[];
  selectedError: Error;
  selErrorTarget: any;
  failed: any;

  constructor(private _errService: ErrorService) {}
  // Recupère la liste d'erreurs en BDD, appelé sur un click, TODO sur un lien dans barre outil...
  getErrors(){
    this._errService.getErrors().then(response => this.errors = response)
                                .catch(failed => this.failed = failed) // This is a connexion error
  }

  // Sélectionne une erreur
  onSelect(error: Error){
    this.selectedError = error;
    console.log("Cible de l'erreur : "+error.target);
  }
}
