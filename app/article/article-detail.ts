// ArticleDetailComponent, affiche le détail d'un article

// Importe Component pour la déclaration, Input pour récuperer les donnée du parent
// OnChanges et SimpleChange pour gérer les changements d'état des paramètres
import { Component, Input, OnChanges, SimpleChange } from "@angular/core";
// Importe les différents Composants et Classes nécessaires
import { Article } from "./article";

import { ImageComponent } from "../image/image.component";
import { Image } from "../image/image";

import { Video } from "../video/video";
import { VideoComponent } from "../video/video.component";
// Importe la Directive gérant l'affichage des Erreurs
import { ErrorHandlerDirective } from "../error/error-handler.directive";

@Component ({
  selector: 'my-article-detail',
  // Template d'article , appelle my-image et injecte l'image si présente
  template:`
  <section [class.selected]="mainSelected">
    <!--<p>Test de propagation ArticleDetail : {{broadcast}}</p>-->
      <div class="page-header" innerHTML="{{article.title}} {{article.subtitle}}" [class.selected]="isTitleSelected"></div>
      <my-image [image]="article.images[0]" [broadcast]="broadcast"></my-image>
      <div innerHTML="{{article.content}}" [class.selected]="isContentSelected"></div>
      <!--<my-video [video]="article.videos[0]"></my-video>-->
      <my-image [image]="article.images[1]" [broadcast]="broadcast"></my-image>
  </section>
  `,styles: [`
    .selected{
      border: 3px solid rgb(255, 0, 0);
      background-color: rgb(255, 255, 0);
      color: rgb(0, 0, 0);
      box-shadow: 1px 1px 12px rgb(255, 0, 0);
    }
    .displayed{
      border: 3px solid rgb(252,166,38);
      box-shadow: 1px 1px 12px rgb(252,166,38);
    }
    `],
    // Déclare les directives utilisées par le composant
    directives: [ImageComponent, VideoComponent, ErrorHandlerDirective]
})

export class ArticleDetailComponent implements OnChanges {
  // Les attributs précédés d'@Input reçoivent leurs données depuis le parent
  @Input() article: Article;
  @Input() broadcast: string;
  isContentSelected: boolean = false;
  isTitleSelected: boolean = false;
  isMainSelected: boolean = false;

  // Surveille les changements d'état de l'attribut broadcast et declenche displayErrors
  // si réception de 'DISPLAY_ERRORS'
  ngOnChanges (changes: {[broadcast: string]: SimpleChange}){
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = chng.currentValue;
      let prev = chng.previousValue;
      if('DISPLAY_ERRORS' == cur){
        this.displayErrors(this.article);
      }
    }
  }

  // Méthode de verification de la présence d'Erreur associée a l'article, selectionne
  // l'élément concerné et assigne le CSS
  public displayErrors(article: Article){
    // console.log(article);
    if(article.errors[0]){
      console.log(article.errors[0].target);
      let target = article.errors[0].target;
      switch (target){
        case "title" :
        case "subtitle": this.isTitleSelected = true;
        break;
        case "content" : this.isContentSelected = true;
        break;
        // default: this.isMainSelected= true;
      }
    }
  }
}
