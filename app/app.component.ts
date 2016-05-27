// Component principal, comprends l'intégralité de la page, le CSS etc
// TODO : Injecter le Router pour la navigation entre les differentes pages

import { Component } from '@angular/core';

import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { ErrorListComponent } from "./error/error-list.component";
import { ErrorService } from "./error/error.service";


@Component({
    selector: 'my-app',
    templateUrl: 'app/wip.html',
    styleUrls: ['app/wip.css'],
    directives: [ArticleComponent, ErrorListComponent],
    providers: [ArticleService, ErrorService],
})
export class AppComponent { }
