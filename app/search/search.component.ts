import { Component, Input } from "@angular/core";
import { Error } from "../error/error";

@Component({
  selector: 'my-search',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <div>
      <ul>
        <li *ngFor="let result of results"><h3 *ngIf="result">{{ result.title }}</h3></li>
      </ul>
    </div>
  `
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
        // let res = regexp.test(error.title)
        // console.log(res);
      })
      results.forEach(el=>{
        el?this.results.push(el):null;
      })
      console.log(this.results);

    }
  }
}
