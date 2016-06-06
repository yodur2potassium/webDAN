import { Component, OnInit } from "@angular/core";

import { ArticleService } from '../article/article.service';
import { ArticleComponent } from "../article/article.component";
import { Article } from "../article/article";


@Component ({
  selector: 'my-navbar',
  template: ``,
  directives: [ArticleComponent],
})

export class NavbarComponent {
  articles: Article[];
  error: any;


}
