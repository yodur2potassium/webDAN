// ArticleComponent, affiche le détail d'un article, modifications prevues, destiné a intégrer ArticleList

// Importe Component pour la déclaration et OnInit pour lancer le service et fetch les donnée au demarrage du Component
import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { ArticleService } from './article.service';



@Component({
    // Défini la balise custom
    selector:'my-article',
    // Template HTML effectuant l'affichage
    template: `
                <section *ngIf="article">
                    <div class="page-header">
                        <h2> {{ article.title }} <small>{{ article.subtitle }} </small></h2>
                    </div>
                    <div>{{ article.content }}</div>
                </section>
    `,
    // Injecte le service
    providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
    // Attributs du Component avec type
    article: Article;
    error: any;
    test: string;

    constructor(private _articleService: ArticleService) {}
    // Callback, fetch les données via le service et les assigne
    getArticle() {
        this._articleService.getArticle().then(response => this.article = response)
                                        .catch(error => this.error = error);
    }
    // Lifecycle hook, lance les fonctions a l'init du Component
    ngOnInit(){
        this.getArticle();
    }

    testFunction() {
      console.log(this);
      console.log(this.test);
    }
}
