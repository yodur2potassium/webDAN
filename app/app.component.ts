// Component principal, comprends l'intégralité de la page, le CSS etc
// TODO : Injecter le Router pour la navigation entre les differentes pages

import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { Article } from "./article/article";
import { ArticleService } from './article/article.service';
import { ArticleListComponent } from './article/article-list.component';

import { Error } from "./error/error";
import { ErrorService } from "./error/error.service";
import { ErrorHandlerDirective } from "./error/error-handler.directive";
import { ErrorDetailComponent } from "./error/error-detail.component";

import { SidebarComponent } from "./sidebar/sidebar.component";
import { FormComponent } from "./form/form.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  // Definis la balise HTML custom
  selector: 'my-app',
  // Charge la template HMTL
  templateUrl: 'app/wip.html',
  // Charge le page de style CSS générale
  styleUrls: ['app/wip.css'],
  // Déclare les directives
  directives: [ArticleListComponent, SidebarComponent, ToolbarComponent, ErrorDetailComponent, ErrorHandlerDirective],
  // Déclare les providers de service de recupération de données API
  providers: [ArticleService, ErrorService],
})


export class AppComponent implements OnInit {
  articles: Article[];
  errors: Error[];
  currArticles: Article[]=[];
  broadcast: string;
  selectedError: Error;
  isShowDetail:boolean = false;
  failed: any;


  constructor(private _articleService: ArticleService,
              private _errorService: ErrorService,
              private _titleService: Title) {}


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
      // this.testFunction();
      this.currArticles = welcome;
  }
  // Routeur "maison", récupère le nom de la page, assigne le titre et assigne les articles a currArticles
  public selectPage(page){
    this.broadcast = "";
    let tab = this.articles;
    let siteName = 'Le Groupe La Poste';
    console.log(page);
    if (page === 'Résultats'){
      this.currArticles = this.articles.slice(0,4);
      this.setTitle(page+' | '+siteName);
    }else if (page === 'Dates clés'){
      this.currArticles =  this.articles.slice(5,8);
      this.setTitle(page+' | '+siteName);
    }else if (page === 'COMEX'){
      this.currArticles = this.articles.slice(8);
      this.setTitle(page);
    }else if (page === 'Accueil'){
      this.currArticles = welcome;
      this.setTitle(homeTitle);
    }
  }

  // Utilise titleService pour modifier le titre de la page
  public setTitle( newTitle: string){
    this._titleService.setTitle( newTitle )
  }

  public onDisplay($event){
    this.broadcast = $event;
    console.log("AppComponent: "+ this.broadcast);
  }

  public onShowError($event){
    this.isShowDetail = true;
    this.selectedError = $event;
  }

  public closeErrorDetail(){
    this.isShowDetail = false;
    this.selectedError= null;
  }

  public testFunction() {
    // document.addEventListener('click',(e)=>{console.log(e.target)});
    // document.addEventListener('click',(e)=>{
    //   console.log(e.target.classList);
    //   let target = e.target;
    //   target.setAttribute('class', 'selected');
    // });
  }

}
var homeTitle = "Accueil - webDAN";
var welcome = [{id: 1000, title: "<h2>Bienvenue</h2>", subtitle: "<h3>sur le projet webDAN</h3>", content: "<p>Utilisez les liens pour naviguer sur le site et voir les articles, les outils pour acceder au erreurs se trouvent en haut de la page...", created: "", author: "", errors: [], images: [], videos: []}];
