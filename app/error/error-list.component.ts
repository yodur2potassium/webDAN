// ErrorListComponent, WORK IN PROGRESS
// Importe Component pour la déclaration et OnInit pour lancer le service et fetch les donnée au demarrage du Component
import { Component } from "@angular/core";
// Importe classe Error et le service pour recup données sur API
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
  // Recupère la liste d'erreurs en BDD, appelé sur un click, TODO sur un lien dans barre outil...
  getErrors(){
    this._errService.getErrors().then(response => this.errors = response)
                                .catch(failed => this.failed = failed) // This is a connexion error
  }

  // Sélectionne une erreur, TODO appelle ErrorDetailComponent
  onSelect(error: Error){
    this.selectedError = error;
    console.log("Cible de l'erreur : "+error.target);
  }
}
