// ImageComponent, affiche une image avec sa descritpion et un sous titre si présent
// Importe Component pour la déclaration
import { Component, Input, OnInit} from "@angular/core";

import { Image } from "./image";

// Déclare la balise custom et le template
@Component ({
  selector: 'my-image',
  template: `
    <figure *ngIf="image" role="group" (click)="displayErrors(image)">
      <img src={{image.source}} class="img-responsive center-block" alt={{image.description}} [class.selected]="isSelected">
      <figcaption class="text-center">{{image.caption}}</figcaption>
    </figure>
  `,styles: [`
    .selected{
      border: 3px solid rgb(255, 0, 0);
      background-color: rgb(255, 255, 0);
      color: rgb(0, 0, 0);
      box-shadow: 1px 1px 12px rgb(255, 0, 0);
    }
    `],
})

export class ImageComponent implements OnInit {
  // Assigne l'input du parent à l'attribut image
  @Input()
  image: Image;
  isSelected = false;

  ngOnInit(){
    // this.displayErrors(this.image);
  }

 public displayErrors(image){
    if (image.errors[0]){
      this.isSelected = true;
      console.log('hasError');
    }
  }
}
