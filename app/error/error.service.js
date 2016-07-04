// ErrorService, assure la connexion avec l'API
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
var ErrorService = (function () {
    function ErrorService(http) {
        this.http = http;
        // URL de l'API
        this.errorURL = "http://localhost:8000/api/errors";
        this.mockErrors = 'mock-errors.json';
    }
    // Retourne une promesse de tableau de type Error en json
    ErrorService.prototype._getErrors = function (source) {
        if (source === void 0) { source = this.errorURL; }
        return this.http.get(source)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Récupére une Erreur via l'API grace à son ID
    ErrorService.prototype.getError = function (id) {
        return this._getErrors()
            .then(function (errors) { return errors.filter(function (error) { return error.id === id; })[0]; });
    };
    // Renvoie une erreur si pb de connexion, à améliorer
    ErrorService.prototype.handleError = function (failed) {
        console.error('An error occurred', failed);
        return Promise.reject(failed.message || failed);
    };
    ErrorService.prototype.loadErrors = function () {
        return this._getErrors();
    };
    ErrorService.prototype.loadMockErrors = function () {
        return this._getErrors(this.mockErrors);
    };
    ErrorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ErrorService);
    return ErrorService;
}());
exports.ErrorService = ErrorService;
//# sourceMappingURL=error.service.js.map