// ImageComponent, affiche une image avec sa descritpion et un sous titre si présent
// Importe Component pour la déclaration
import { Component, Input } from "@angular/core";

import { Image } from "./image";

// Déclare la balise custom et le template
@Component ({
  selector: 'my-image',
  template: `
    <section *ngIf="image" role="group">
    <img src={{image.source}} class="img-responsive center-block" alt={{image.description}}>
    <figcaption *ngIf="image.caption" class="text-center">{{image.caption}}</figcaption>
    </section>
  `,
})

export class ImageComponent{
  // Assigne l'input du parent à l'attribut image
  @Input()
  image: Image;
}
