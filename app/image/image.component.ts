// ImageComponent, affiche une image avec sa descritpion et un sous titre si présent
// Importe Component pour la déclaration
import { Component, Input } from "@angular/core";

import { Image } from "./image";

// Déclare la balise custom et le template
@Component ({
  selector: 'my-image',
  template: `
    <figure *ngIf="image" role="group">
      <img src={{image.source}} class="img-responsive center-block" alt={{image.description}} (click)="isSelected =! isSelected" [class.selected]="isSelected">
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

export class ImageComponent{
  // Assigne l'input du parent à l'attribut image
  @Input()
  image: Image;
}
