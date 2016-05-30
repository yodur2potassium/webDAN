// ArticleComponent, affiche une liste article, modifications prevues

// Importe Component pour la déclaration et OnInit pour lancer le service et fetch les donnée au demarrage du Component
import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { ArticleService } from './article.service';
import { ImageComponent } from "../image/image.component";
import { Image } from "../image/image";


@Component({
    // Défini la balise custom
    selector:'my-article',
    // Template HTML effectuant l'affichage
    template: `
                <div *ngFor="let article of articles">
                <section>
                    <div class="page-header" innerHTML="{{article.title}} {{article.subtitle}}"></div>
                    <my-image [image]="article.images[0]"></my-image>
                    <div innerHTML="{{article.content}}"></div>
                    <my-image [image]="article.images[1]"></my-image>
                </section>
                </div>
    `,
    // Injecte le service
    providers: [ArticleService],
    directives: [ImageComponent]

})
export class ArticleComponent implements OnInit {
    // Attributs du Component avec type
    articles: Article[];
    error: any;
    test: string;

    constructor(private _articleService: ArticleService) {}
    // Callback, fetch les données via le service et les assigne
    getArticles() {
        this._articleService.getArticles().then(response => this.articles = response)
                                        .catch(error => this.error = error);
    }
    // Lifecycle hook, lance les fonctions a l'init du Component
    ngOnInit(){
        this.getArticles();
    }

    testFunction() {
      console.log(this);
      console.log(this.test);
    }
}
