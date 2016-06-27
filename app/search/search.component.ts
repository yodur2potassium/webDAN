// SearchComponent, champ de recherche des Erreurs par titre

// Importe Component pour la déclaration et Input pour récuperer les données du parent
import { Component, Input } from "@angular/core";
import { Error } from "../error/error";

@Component({
  selector: 'my-search',
  template: `
    <input #box (keyup)="onKey(box.value)" placeholder="Entrez votre recherche..." class="form-control" aria-label="...">
    <div class="dropdown" [class.open]="isToggled"><br>
      <div class="dropdown-menu dropdown-menu-down" aria-labelledby="dropdownMenu2">
        <ul *ngIf='results'>
          <li *ngFor="let result of results"><a>{{ result.title }}</a></li>
        </ul>
      </div>
    </div>
      `,
})
export class SearchComponent {
  @Input()
  errors: Error[];
  values='';
  results: Error[];
  isToggled:boolean = false;

  // Fonction de recherche des erreurs, déclenchée par frappe clavier
  onKey(value:string) {
    this.isToggled = false;
    this.values = value;
    // Tableau de résultats ré-initialisé
    this.results = []
    // Si plus de 3 caractères
    if (this.values.length > 3){
      // Ajoute \b au debut de l'input utilisatuer pour rechercher le debut d'un mot
      let input = '\\b' + this.values;
      // Le parametre 'i' rend l'expression non sensible à la casse
      let regexp = new RegExp(input, 'i');
      // Renvoie une copie du tableau d'erreurs avec résultat ou undefined
      let results = this.errors.map(error =>{
        return regexp.test(error.title)?error:undefined;
      })
      // Parcours le tableau de résultats et ajoute les erreurs trouvées à l'attribut results du component
      results.forEach(el=>{
        el?this.results.push(el):null;
      })
      // Vérifie l'existence d'une Erreur correspondant à la recherche et ouvre le dropdown
      if(this.results[0]){
        this.isToggled = true;
      }
    }
  }
}
