import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { ArticleService } from './article.service';



@Component({
    selector:'my-article',
    template: `
                <section *ngIf="article">
                    <div class="page-header">
                        <h2> {{ article.title }} <small>{{ article.subtitle }} </small></h2>
                    </div>
                    <div>{{ article.content }}</div>
                </section>
    `,
    providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

    article: Article;
    error: any;
    test: string;

    constructor(private _articleService: ArticleService) {}

    getArticle() {
        this._articleService.getArticle().then(response => this.article = response)
                                        .catch(error => this.error = error);
    }

    ngOnInit(){
        this.getArticle();
    }

    testFunction() {
      console.log(this);
      console.log(this.test);
    }
}
