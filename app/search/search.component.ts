import { Component } from "@angular/core";

@Component({
  selector: 'my-search',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class SearchComponent {
  values='';
  onKey(value:string) {
    this.values += value + ' | ';
  }
}
