import { Component, Input } from "@angular/core";
// import { Error } from "../error/error";

@Component({
  selector: 'my-search',
  template: `
    <input #box (keyup)="onKey(box.value)">
  `
})
export class SearchComponent {
  @Input()
  errors: Error[];
  values='';
  onKey(value:string) {
    this.values = value;
    console.log(this.values)
  }
}
