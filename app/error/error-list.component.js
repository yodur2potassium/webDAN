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
// ErrorListComponent, WORK IN PROGRESS
// Importe Component pour la déclaration et OnInit pour lancer le service et fetch les donnée au demarrage du Component
var core_1 = require("@angular/core");
var error_service_1 = require("./error.service");
var ErrorListComponent = (function () {
    function ErrorListComponent(_errService) {
        this._errService = _errService;
    }
    // Recupère la liste d'erreurs en BDD, appelé sur un click, TODO sur un lien dans barre outil...
    ErrorListComponent.prototype.getErrors = function () {
        var _this = this;
        this._errService.getErrors().then(function (response) { return _this.errors = response; })
            .catch(function (failed) { return _this.failed = failed; }); // This is a connexion error
    };
    // Sélectionne une erreur, TODO appelle ErrorDetailComponent
    ErrorListComponent.prototype.onSelect = function (error) {
        this.selectedError = error;
        console.log("Cible de l'erreur : " + error.target);
    };
    ErrorListComponent = __decorate([
        core_1.Component({
            selector: 'my-error-list',
            template: "<div (click)=\"getErrors()\">\n                  <h3>Click</h3>\n                  <ul>\n                    <li *ngFor=\"let error of errors\" (click)=\"onSelect(error)\">\n                      <h4>{{error.title}}</h4>\n                      <p>{{error.description}}</p>\n                  </ul>\n              </div>\n              ",
            providers: [error_service_1.ErrorService],
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService])
    ], ErrorListComponent);
    return ErrorListComponent;
}());
exports.ErrorListComponent = ErrorListComponent;
//# sourceMappingURL=error-list.component.js.map