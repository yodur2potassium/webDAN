// Component principal, comprends l'intégralité de la page, le CSS etc
// TODO : Injecter le Router pour la navigation entre les differentes pages
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require("@angular/platform-browser");
var article_component_1 = require('./article/article.component');
var article_service_1 = require('./article/article.service');
var error_list_component_1 = require("./error/error-list.component");
var error_service_1 = require("./error/error.service");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var search_component_1 = require("./search/search.component");
var AppComponent = (function () {
    function AppComponent(_articleService, _errorService, titleService) {
        this._articleService = _articleService;
        this._errorService = _errorService;
        this.titleService = titleService;
        this.currArticles = [];
    }
    // Récupère l'intégralité des Articles via le service
    AppComponent.prototype.getArticles = function () {
        var _this = this;
        this._articleService.getArticles().then(function (response) { return _this.articles = response; })
            .catch(function (failed) { return _this.failed = failed; }); // This is a connexion error
    };
    // Récupère l'intégralité des Erreurs via le service
    AppComponent.prototype.getErrors = function () {
        var _this = this;
        this._errorService.getErrors().then(function (response) { return _this.errors = response; })
            .catch(function (failed) { return _this.failed = failed; }); // This is a connexion error
    };
    // Lifecycle hook, lance les fonctions a l'init du Component
    AppComponent.prototype.ngOnInit = function () {
        this.getArticles();
        this.getErrors();
        this.setTitle('Accueil - webDAN');
    };
    // Routeur "maison", récupère le nom de la page, assigne le titre et assigne les articles a currArticles
    AppComponent.prototype.selectPage = function (page) {
        var tab = this.articles;
        var siteName = 'Groupe La Poste en 2016';
        console.log(page);
        if (page === 'Résultats') {
            this.currArticles = this.articles.slice(0, 4);
            this.setTitle(page + ' - ' + siteName);
        }
        else if (page === 'Dates clés') {
            this.currArticles = this.articles.slice(5, 8);
            this.setTitle(page + ' - ' + siteName);
        }
        else if (page === 'COMEX') {
            this.currArticles = this.articles.slice(8);
            this.setTitle(page + ' - ' + siteName);
        }
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = __decorate([
        core_1.Component({
            // Definis la balise HTML custom
            selector: 'my-app',
            // Charge la template HMTL
            templateUrl: 'app/wip.html',
            // Charge le page de style CSS générale
            styleUrls: ['app/wip.css'],
            // Déclare les directives
            directives: [article_component_1.ArticleComponent, error_list_component_1.ErrorListComponent, sidebar_component_1.SidebarComponent, search_component_1.SearchComponent],
            // Déclare les providers de service de recupération de données API
            providers: [article_service_1.ArticleService, error_service_1.ErrorService],
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, error_service_1.ErrorService, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map