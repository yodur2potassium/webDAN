import { Component } from '@angular/core';

import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';



@Component({
    selector: 'my-app',
    templateUrl: 'app/wip.html',
    directives: [ArticleComponent],
    providers: [ArticleService],
})
export class AppComponent { } 