// ArticleService, assure la connexion avec l'API, temporaire
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
// Rends le Component injectable comme service
var core_1 = require('@angular/core');
// Importe le service HTTP et headers
var http_1 = require('@angular/http');
// Importe une fonction pour convertir l'Observable en Promise
require('rxjs/add/operator/toPromise');
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        // URL de l'API
        this.artUrl = "http://localhost:8000/api/articles";
    }
    // Retourne une promesse de type Article en json
    ArticleService.prototype.getArticles = function () {
        // return ARTICLES;
        return this.http.get(this.artUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Renvoie une erreur si pb de connexion, à améliorer
    ArticleService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleService);
    return ArticleService;
}());
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map