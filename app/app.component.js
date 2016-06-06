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
var router_deprecated_1 = require("@angular/router-deprecated");
var article_component_1 = require('./article/article.component');
var article_service_1 = require('./article/article.service');
var error_list_component_1 = require("./error/error-list.component");
var error_service_1 = require("./error/error.service");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var form_component_1 = require("./form/form.component");
var AppComponent = (function () {
    function AppComponent(_articleService, _errorService) {
        this._articleService = _articleService;
        this._errorService = _errorService;
    }
    // Récupère l'intégralite des Articles via le service
    AppComponent.prototype.getArticles = function () {
        var _this = this;
        this._articleService.getArticles().then(function (response) { return _this.articles = response; })
            .catch(function (failed) { return _this.failed = failed; }); // This is a connexion error
    };
    // Récupère l'intégralite des Erreurs via le service
    AppComponent.prototype.getErrors = function () {
        var _this = this;
        this._errorService.getErrors().then(function (response) { return _this.errors = response; })
            .catch(function (failed) { return _this.failed = failed; }); // This is a connexion error
    };
    // Lifecycle hook, lance les fonctions a l'init du Component
    AppComponent.prototype.ngOnInit = function () {
        this.getArticles();
        this.getErrors();
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
            directives: [article_component_1.ArticleComponent, error_list_component_1.ErrorListComponent, sidebar_component_1.SidebarComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            // Déclare les providers de service de recupération de données API
            providers: [article_service_1.ArticleService, error_service_1.ErrorService, router_deprecated_1.ROUTER_PROVIDERS],
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                name: 'Homepage',
                component: article_component_1.ArticleComponent
            }, {
                path: '/erreurs',
                name: 'Errors',
                component: error_list_component_1.ErrorListComponent
            }, {
                path: '/contact',
                name: 'Contact',
                component: form_component_1.FormComponent
            }
        ]), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, error_service_1.ErrorService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map