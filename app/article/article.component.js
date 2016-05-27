// ArticleComponent, affiche le détail d'un article, modifications prevues, destiné a intégrer ArticleList
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
// Importe Component pour la déclaration et OnInit pour lancer le service et fetch les donnée au demarrage du Component
var core_1 = require('@angular/core');
var article_service_1 = require('./article.service');
var ArticleComponent = (function () {
    function ArticleComponent(_articleService) {
        this._articleService = _articleService;
    }
    // Callback, fetch les données via le service et les assigne
    ArticleComponent.prototype.getArticle = function () {
        var _this = this;
        this._articleService.getArticle().then(function (response) { return _this.article = response; })
            .catch(function (error) { return _this.error = error; });
    };
    // Lifecycle hook, lance les fonctions a l'init du Component
    ArticleComponent.prototype.ngOnInit = function () {
        this.getArticle();
    };
    ArticleComponent.prototype.testFunction = function () {
        console.log(this);
        console.log(this.test);
    };
    ArticleComponent = __decorate([
        core_1.Component({
            // Défini la balise custom
            selector: 'my-article',
            // Template HTML effectuant l'affichage
            template: "\n                <section *ngIf=\"article\">\n                    <div class=\"page-header\">\n                        <h2> {{ article.title }} <small>{{ article.subtitle }} </small></h2>\n                    </div>\n                    <div>{{ article.content }}</div>\n                </section>\n    ",
            // Injecte le service
            providers: [article_service_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map