// Component principal, comprends l'intégralité de la page, le CSS etc
// TODO : Injecter le Router pour la navigation entre les differentes pages

import { Component, OnInit } from '@angular/core';

import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { Article } from "./article/article";
import { ErrorListComponent } from "./error/error-list.component";
import { ErrorService } from "./error/error.service";
import { Error } from "./error/error";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FormComponent } from "./form/form.component";

@Component({
  // Definis la balise HTML custom
  selector: 'my-app',
  // Charge la template HMTL
  templateUrl: 'app/wip.html',
  // Charge le page de style CSS générale
  styleUrls: ['app/wip.css'],
  // Déclare les directives
  directives: [ArticleComponent, ErrorListComponent, SidebarComponent],
  // Déclare les providers de service de recupération de données API
  providers: [ArticleService, ErrorService],
})

export class AppComponent implements OnInit {
  articles: Article[];
  errors: Error[];
  currArticles: Article[]=[];
  currPage: number;
  failed: any;


  constructor(private _articleService: ArticleService, private _errorService: ErrorService) {}
  // Récupère l'intégralite des Articles via le service
  getArticles() {
      this._articleService.getArticles().then(response => this.articles = response)
                                      .catch(failed => this.failed = failed); // This is a connexion error
  }
  // Récupère l'intégralite des Erreurs via le service
  getErrors(){
    this._errorService.getErrors().then(response => this.errors = response)
                                .catch(failed => this.failed = failed) // This is a connexion error
  }
  // Lifecycle hook, lance les fonctions a l'init du Component
  ngOnInit(){
      this.getArticles();
      this.getErrors();
  }
  // Routeur "maison", récupère le numero de page et assigne les articles a currArticles
  selectPage(page){
    this.currPage = page;
    let tab = this.articles;
    console.log(this.currPage);
    if (this.currPage === 1){
      this.currArticles = tab.slice(0,4);
    }else if (this.currPage === 2){
      this.currArticles =  tab.slice(5,8);
    }else if (this.currPage === 3){
      this.currArticles = this.articles.slice(8);
    }
  }
}
