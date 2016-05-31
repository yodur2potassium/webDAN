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
var article_component_1 = require('./article/article.component');
var article_service_1 = require('./article/article.service');
var error_list_component_1 = require("./error/error-list.component");
var error_service_1 = require("./error/error.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            // Definis la balise HTML custom
            selector: 'my-app',
            // Charge la template HMTL
            templateUrl: 'app/wip.html',
            // Charge le page de style CSS générale
            styleUrls: ['app/wip.css'],
            // Déclare les directives
            directives: [article_component_1.ArticleComponent, error_list_component_1.ErrorListComponent],
            // Déclare les providers de service de recupération de données API
            providers: [article_service_1.ArticleService, error_service_1.ErrorService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map