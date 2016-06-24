// ImageComponent, affiche une image avec sa descritpion et un sous titre si présent
// Importe Component pour la déclaration
import { Component, Input, OnChanges, SimpleChange} from "@angular/core";

import { Image } from "./image";
import { ErrorHandlerDirective } from "../error/error-handler.directive";

// Déclare la balise custom et le template
@Component ({
  selector: 'my-image',
  template: `
    <!--<p>Test de propagation ImageComponent : {{broadcast}}</p>-->
    <figure *ngIf="image" role="group" (click)=displayErrors(image)>
      <img src={{image.source}} class="img-responsive center-block" alt={{image.description}} [myErrorHandler]="isDisplayed">
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
    directives: [ErrorHandlerDirective]
  })

  export class ImageComponent implements OnChanges {
    // Assigne l'input du parent à l'attribut image
    @Input() image: Image;
    @Input() broadcast: string;
    isDisplayed:boolean = false;


    ngOnChanges (changes: {[broadcast: string]: SimpleChange}){
      for (let propName in changes) {
        let chng = changes[propName];
        let cur  = chng.currentValue;
        let prev = chng.previousValue;
        if('DISPLAY_ERRORS' == cur){
          this.displayErrors(this.image);
        }
      }
    }

    public displayErrors(image){
      if (image && image.errors[0]){
        this.isDisplayed = true;
        console.log('hasError');
      }
    }

  }
