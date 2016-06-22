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
// Importe Component pour la déclaration et Input pour récuperer les donnée du parent
var core_1 = require("@angular/core");
var article_1 = require("./article");
var image_component_1 = require("../image/image.component");
var video_component_1 = require("../video/video.component");
var ArticleDetailComponent = (function () {
    function ArticleDetailComponent() {
        this.contentSelected = false;
        this.titleSelected = false;
        this.mainSelected = false;
    }
    ArticleDetailComponent.prototype.displayErrors = function (article) {
        // console.log(article);
        if (article.errors[0]) {
            console.log(article.errors[0].target);
            var target = article.errors[0].target;
            switch (target) {
                case "title":
                case "subtitle":
                    this.titleSelected = true;
                    break;
                case "content":
                    this.contentSelected = true;
                    break;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', article_1.Article)
    ], ArticleDetailComponent.prototype, "article", void 0);
    ArticleDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-article-detail',
            // Template d'article , appelle my-image et injecte l'image si présente
            template: "\n  <section [class.selected]=\"mainSelected\"  (click)=\"displayErrors(article)\">\n      <div class=\"page-header\" innerHTML=\"{{article.title}} {{article.subtitle}}\" [class.selected]=\"titleSelected\"></div>\n      <my-image [image]=\"article.images[0]\"></my-image>\n      <div innerHTML=\"{{article.content}}\" [class.selected]=\"contentSelected\"></div>\n      <!--<my-video [video]=\"article.videos[0]\"></my-video>-->\n      <my-image [image]=\"article.images[1]\"></my-image>\n  </section>\n  ", styles: ["\n    .selected{\n      border: 3px solid rgb(255, 0, 0);\n      background-color: rgb(255, 255, 0);\n      color: rgb(0, 0, 0);\n      box-shadow: 1px 1px 12px rgb(255, 0, 0);\n    }\n    "],
            // Déclare les directives utilisées par le composant
            directives: [image_component_1.ImageComponent, video_component_1.VideoComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());
exports.ArticleDetailComponent = ArticleDetailComponent;
//# sourceMappingURL=article-detail.js.map