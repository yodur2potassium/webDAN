// ArticleListComponent, affiche une liste article, assigne l'article à ArticleDetailComponent
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
// Importe Component pour la déclaration et Input pour recevoir des données depuis le parent
var core_1 = require('@angular/core');
var article_detail_1 = require("./article-detail");
// Declaration du composant
var ArticleListComponent = (function () {
    function ArticleListComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ArticleListComponent.prototype, "articles", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ArticleListComponent.prototype, "broadcast", void 0);
    ArticleListComponent = __decorate([
        core_1.Component({
            // Défini la balise HTML
            selector: 'my-article-list',
            // Template HTML effectuant l'affichage, parcours le tableau d'articles et injecte l'article dans my-article-detail
            template: "\n      <div *ngFor=\"let article of articles\">\n        <my-article-detail [article]=\"article\" [broadcast]=\"broadcast\"></my-article-detail>\n      </div>\n    ",
            // Déclare la directive ArticleDetail
            directives: [article_detail_1.ArticleDetailComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleListComponent);
    return ArticleListComponent;
}());
exports.ArticleListComponent = ArticleListComponent;
//# sourceMappingURL=article-list.component.js.map