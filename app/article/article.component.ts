// ArticleComponent, affiche une liste article, modifications prevues

// Importe Component pour la déclaration et OnInit pour lancer le service et fetch les donnée au demarrage du Component
import { Component, Input } from '@angular/core';

import { Article } from './article';
import { ImageComponent } from "../image/image.component";
import { Image } from "../image/image";
import { Video } from "../video/video";
import { VideoComponent } from "../video/video.component";


@Component({
    // Défini la balise HTML custom
    selector:'my-article',

    // Template HTML effectuant l'affichage, parcours le tabeau d'articles, appelle my-image et injecte l'image si présente
    template: `
                <div *ngFor="let article of articles"  (click)="displayErrors(article)">
                <section [class.selected]="mainSelected">
                    <div class="page-header" innerHTML="{{article.title}} {{article.subtitle}}" [class.selected]="titleSelected"></div>
                    <my-image [image]="article.images[0]"></my-image>
                    <div innerHTML="{{article.content}}" [class.selected]="contentSelected"></div>
                    <!--<my-video [video]="article.videos[0]"></my-video>-->
                    <my-image [image]="article.images[1]"></my-image>
                </section>
                </div>
    `,styles: [`
      .selected{
        border: 3px solid rgb(255, 0, 0);
        background-color: rgb(255, 255, 0);
        color: rgb(0, 0, 0);
        box-shadow: 1px 1px 12px rgb(255, 0, 0);
      }
      `],
    // Déclare les directives utilisées par le composant
    directives: [ImageComponent, VideoComponent]

})
export class ArticleComponent {
    // Attributs du Component avec type
    @Input()
    articles: Article[];
    error: any;
    test: string;
    contentSelected = false;
    titleSelected = false;
    mainSelected = false;

    public displayErrors(article: Article){
      // console.log(article);
      if(article.errors[0]){
        console.log(article.errors[0].target);
        let target = article.errors[0].target;
        switch (target){
          case "title" :
          case "subtitle": this.titleSelected = true;
          break;
          case "content" : this.contentSelected = true;
          break;
          // default: this.mainSelected= true;
        }
      }
    }

    testFunction() {

    }
}
