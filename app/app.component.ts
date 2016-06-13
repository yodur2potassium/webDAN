// Component principal, comprends l'intégralité de la page, le CSS etc
// TODO : Injecter le Router pour la navigation entre les differentes pages

import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { Article } from "./article/article";
import { ErrorListComponent } from "./error/error-list.component";
import { ErrorService } from "./error/error.service";
import { Error } from "./error/error";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FormComponent } from "./form/form.component";
import { SearchComponent } from "./search/search.component";

@Component({
  // Definis la balise HTML custom
  selector: 'my-app',
  // Charge la template HMTL
  templateUrl: 'app/wip.html',
  // Charge le page de style CSS générale
  styleUrls: ['app/wip.css'],
  // Déclare les directives
  directives: [ArticleComponent, ErrorListComponent, SidebarComponent, SearchComponent],
  // Déclare les providers de service de recupération de données API
  providers: [ArticleService, ErrorService],
})

export class AppComponent implements OnInit {
  articles: Article[];
  errors: Error[];
  currArticles: Article[]=[];
  failed: any;


  constructor(private _articleService: ArticleService,
              private _errorService: ErrorService,
              private titleService: Title) {}
  // Récupère l'intégralité des Articles via le service
  public getArticles() {
      this._articleService.getArticles().then(response => this.articles = response)
                                      .catch(failed => this.failed = failed); // This is a connexion error
  }
  // Récupère l'intégralité des Erreurs via le service
  public getErrors(){
    this._errorService.getErrors().then(response => this.errors = response)
                                .catch(failed => this.failed = failed) // This is a connexion error
  }
  // Lifecycle hook, lance les fonctions a l'init du Component
  public ngOnInit(){
      this.getArticles();
      this.getErrors();
      this.setTitle('Accueil - webDAN');
  }
  // Routeur "maison", récupère le nom de la page, assigne le titre et assigne les articles a currArticles
  public selectPage(page){
    let tab = this.articles;
    let siteName = 'Groupe La Poste en 2016';
    console.log(page);
    if (page === 'Résultats'){
      this.currArticles = this.articles.slice(0,4);
      this.setTitle(page+' - '+siteName);
    }else if (page === 'Dates clés'){
      this.currArticles =  this.articles.slice(5,8);
      this.setTitle(page+' - '+siteName);
    }else if (page === 'COMEX'){
      this.currArticles = this.articles.slice(8);
      this.setTitle(page+' - '+siteName);
    }
  }

  public setTitle( newTitle: string){
    this.titleService.setTitle( newTitle )
  }
}
