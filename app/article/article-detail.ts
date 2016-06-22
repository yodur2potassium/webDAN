// Importe Component pour la déclaration et Input pour récuperer les donnée du parent
import { Component, Input } from "@angular/core";

import { Article } from "./article";
import { ImageComponent } from "../image/image.component";
import { Image } from "../image/image";
import { Video } from "../video/video";
import { VideoComponent } from "../video/video.component";


@Component ({
  selector: 'my-article-detail',
  // Template d'article , appelle my-image et injecte l'image si présente
  template:`
  <section [class.selected]="mainSelected"  (click)="displayErrors(article)">
      <div class="page-header" innerHTML="{{article.title}} {{article.subtitle}}" [class.selected]="titleSelected"></div>
      <my-image [image]="article.images[0]"></my-image>
      <div innerHTML="{{article.content}}" [class.selected]="contentSelected"></div>
      <!--<my-video [video]="article.videos[0]"></my-video>-->
      <my-image [image]="article.images[1]"></my-image>
  </section>
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

export class ArticleDetailComponent {
  @Input()
  article: Article;
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
}
