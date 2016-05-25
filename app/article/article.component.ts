import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { ArticleService } from './article.service';



@Component({
    selector:'my-article',
    template: `
                <section>
                    <div class="page-header">
                        <h2> {{ title }} <small>{{ subtitle }} </small></h2>
                    </div>
                    <div>{{ content }}</div>
                </section>
    `,
    providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
    
    article: Article;
    error: any;
    
    constructor(private articleService: ArticleService) {}
    
    getArticle() {
        this.articleService.getArticle().then(article => this.article = article)
                                        .catch(error => this.error = error);
        console.log(this.article);
    }
    
    ngOnInit(){
        this.getArticle();
    }
} 