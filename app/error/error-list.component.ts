// ErrorListComponent, WORK IN PROGRESS
// Importe Component pour la déclaration et OnInit pour lancer le service et fetch les donnée au demarrage du Component
import { Component, Input, Output, EventEmitter } from "@angular/core";
// Importe classe Error et le service pour recup données sur API
import { Error } from "./error";
import { ErrorService } from "./error.service";

// Déclare la balise HTML custom et le template
// Parcours le tableau d'erreurs, les affiche et les rends cliquable
// Appelle le composant error-detail sur l'erreur selectionnée
@Component({
    selector: 'my-error-list',
    template: `
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Afficher la liste des erreurs <span class="caret"></span></button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li *ngFor="let error of errors" (click)="onSelect(error)">
                      {{error.accede_code}} - {{error.title}}
                    </li>
                  </ul>
    `,
    styles:[`
        .dropdown-menu li{
            padding: 0 5em 0;
        }
      `]
})
export class ErrorListComponent {
  @Input() errors: Error[];
  @Output() emitDetailError: EventEmitter<any> = new EventEmitter();
  selectedError: Error;
  selErrorTarget: any;
  failed: any;
  isVisible = false;

  // Sélectionne une erreur
  onSelect(error: Error){
    this.selectedError = error;
    this.emitDetailError.emit(error)
    console.log("Cible de l'erreur : "+error.target);
  }
}
