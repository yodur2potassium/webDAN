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
var error_detail_component_1 = require("./error-detail.component");
// Déclare la balise HTML custom et le template
// Parcours le tableau d'erreurs, les affiche et les rends cliquable
// Appelle le composant error-detail sur l'erreur selectionnée
var ErrorListComponent = (function () {
    function ErrorListComponent() {
    }
    // Sélectionne une erreur
    ErrorListComponent.prototype.onSelect = function (error) {
        this.selectedError = error;
        console.log("Cible de l'erreur : " + error.target);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ErrorListComponent.prototype, "errors", void 0);
    ErrorListComponent = __decorate([
        core_1.Component({
            selector: 'my-error-list',
            template: "<div>\n                  <h3>Liste des erreurs</h3>\n                  <ul>\n                    <li *ngFor=\"let error of errors\" (click)=\"onSelect(error)\">\n                      <h4>{{error.accede_code}} - {{error.title}}</h4>\n                    </li>\n                  </ul>\n                  <my-error-detail [error]=\"selectedError\"></my-error-detail>\n              </div>\n              ",
            directives: [error_detail_component_1.ErrorDetailComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorListComponent);
    return ErrorListComponent;
}());
exports.ErrorListComponent = ErrorListComponent;
//# sourceMappingURL=error-list.component.js.map