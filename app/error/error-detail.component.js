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
var error_1 = require("./error");
var ErrorDetailComponent = (function () {
    function ErrorDetailComponent() {
    }
    // WIP, récupère la cible de l'erreur...
    ErrorDetailComponent.prototype.getLinkedTo = function () {
        console.log(this.error);
        if (this.error.article) {
            console.log('plop');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', error_1.Error)
    ], ErrorDetailComponent.prototype, "error", void 0);
    ErrorDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-error-detail',
            template: "\n    <div id=\"erreurDetail\" *ngIf=\"error\" (click)=\"getLinkedTo()\">\n      <h4>{{ error.title }}</h4>\n      <strong>Correction :</strong>\n      <p>{{ error.description }}</p>\n      <ul>\n      <strong>Documentation :</strong>\n        <li *ngFor=\"let doc of error.documentations\">\n          <a href=\"{{doc.source}}\">Lien vers ressources externes en {{doc.lang}}</a>\n        </li>\n      </ul>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorDetailComponent);
    return ErrorDetailComponent;
}());
exports.ErrorDetailComponent = ErrorDetailComponent;
//# sourceMappingURL=error-detail.component.js.map