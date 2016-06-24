import { Component, Input } from "@angular/core";
import { Error } from "../error/error";

@Component({
  selector: 'my-search',
  template: `
    <div class="dropdown">
      <input #box (keyup)="onKey(box.value)" placeholder="Entrez votre recherche..." class="form-control" aria-label="...">
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <ul *ngIf='results'>
              <li *ngFor="let result of results"><a>{{ result.title }}</a></li>
          </ul>
        </div>
    </div>
      `,
  // directives: [CORE_DIRECTIVES, DROPDOWN_DIRECTIVES]
})
export class SearchComponent {
  @Input()
  errors: Error[];
  values='';
  results: Error[];

  // Fonction de recherche des erreurs, déclenchée par frappe clavier
  onKey(value:string) {
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
      // Parcours le tableau de résultats et ajoute les erreurs trouvées a l'attribut results du component
      results.forEach(el=>{
        el?this.results.push(el):null;
      })
      console.log(this.results);
    }
  }
}
