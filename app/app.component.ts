import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';



@Component({
    selector:'my-app',
    templateUrl: 'app/wip.html',
    directives: [ArticleComponent]
})
export class AppComponent {} 