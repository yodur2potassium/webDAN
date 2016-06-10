import { Component, Input } from "@angular/core";
import { Error } from "../error/error";
// import { CORE_DIRECTIVES } from "@angular/common";
// import { DROPDOWN_DIRECTIVES } from "ng2-bootstrap";

@Component({
  selector: 'my-search',
  template: `
    <input #box (keyup)="onKey(box.value)">
        <span *ngIf='results'>
          <ul class="dropdown">
            <li *ngFor="let result of results"><a class="dropdown-item">{{ result.title }}</a></li>
          </ul>
        </span>
  `,
  // directives: [CORE_DIRECTIVES, DROPDOWN_DIRECTIVES]
})
export class SearchComponent {
  @Input()
  errors: Error[];
  values='';
  results: Error[];

  onKey(value:string) {
    this.values = value;
    this.results = []
    if (this.values.length > 3){
      let input = '\\b' + this.values;
      let regexp = new RegExp(input, 'i');
      let results = this.errors.map(error =>{
        return regexp.test(error.title)?error:undefined;
      })
      results.forEach(el=>{
        el?this.results.push(el):null;
      })
      console.log(this.results);
    }
  }
}
