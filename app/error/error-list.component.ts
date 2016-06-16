// ErrorListComponent, WORK IN PROGRESS
// Importe Component pour la déclaration et OnInit pour lancer le service et fetch les donnée au demarrage du Component
import { Component, Input } from "@angular/core";
// Importe classe Error et le service pour recup données sur API
import { Error } from "./error";
import { ErrorService } from "./error.service";
import { ErrorDetailComponent } from "./error-detail.component";

// Déclare la balise HTML custom et le template
// Parcours le tableau d'erreurs, les affiche et les rends cliquable
// Appelle le composant error-detail sur l'erreur selectionnée
@Component({
    selector: 'my-error-list',
    template: `<div>
                  <button (click)="isVisible = !isVisible">Afficher/Cacher la liste des erreurs</button>
                  <ul [style.display]="isVisible? 'inline' : ' none' ">
                    <li *ngFor="let error of errors" (click)="onSelect(error)">
                      <h4>{{error.accede_code}} - {{error.title}}</h4>
                    </li>
                  </ul>
                  <my-error-detail [error]="selectedError"></my-error-detail>
              </div>
              `,
    directives: [ErrorDetailComponent],
})
export class ErrorListComponent {
  @Input()
  errors: Error[];
  selectedError: Error;
  selErrorTarget: any;
  failed: any;
  isVisible = false;

  // Sélectionne une erreur
  onSelect(error: Error){
    this.selectedError = error;
    this.isVisible = false;
    console.log("Cible de l'erreur : "+error.target);
  }
}
