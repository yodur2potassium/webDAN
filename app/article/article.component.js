// ArticleComponent, affiche une liste article, modifications prevues
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
var image_component_1 = require("../image/image.component");
var video_component_1 = require("../video/video.component");
var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.testFunction = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ArticleComponent.prototype, "articles", void 0);
    ArticleComponent = __decorate([
        core_1.Component({
            // Défini la balise HTML custom
            selector: 'my-article',
            // Template HTML effectuant l'affichage, parcours le tabeau d'articles, appelle my-image et injecte l'image si présente
            template: "\n                <div *ngFor=\"let article of articles\">\n                <section>\n                    <div class=\"page-header\" innerHTML=\"{{article.title}} {{article.subtitle}}\"></div>\n                    <my-image [image]=\"article.images[0]\"></my-image>\n                    <div innerHTML=\"{{article.content}}\"></div>\n                    <!--<my-video [video]=\"article.videos[0]\"></my-video>-->\n                    <my-image [image]=\"article.images[1]\"></my-image>\n                </section>\n                </div>\n    ", styles: ["\n      .selected{\n        border: 3px solid rgb(255, 0, 0);\n        background-color: #F2DEDE;\n        color: rgb(0, 0, 0)\n        box-shadow: 1px 1px 12px #555;\n      }\n      "],
            // Déclare les directives utilisées par le composant
            directives: [image_component_1.ImageComponent, video_component_1.VideoComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map