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
// Déclare la balise HTML custom et le template
// Parcours le tableau d'erreurs, les affiche et les rends cliquable
// Appelle le composant error-detail sur l'erreur selectionnée
var ErrorListComponent = (function () {
    function ErrorListComponent() {
        this.emitDetailError = new core_1.EventEmitter();
        this.isVisible = false;
    }
    // Sélectionne une erreur
    ErrorListComponent.prototype.onSelect = function (error) {
        this.selectedError = error;
        this.emitDetailError.emit(error);
        console.log("Cible de l'erreur : " + error.target);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ErrorListComponent.prototype, "errors", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ErrorListComponent.prototype, "emitDetailError", void 0);
    ErrorListComponent = __decorate([
        core_1.Component({
            selector: 'my-error-list',
            template: "\n        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Afficher la liste des erreurs <span class=\"caret\"></span></button>\n                  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                    <li *ngFor=\"let error of errors\" (click)=\"onSelect(error)\">\n                      {{error.accede_code}} - {{error.title}}\n                    </li>\n                  </ul>\n    ",
            styles: ["\n        .dropdown-menu li{\n            padding: 0 5em 0;\n        }\n      "]
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorListComponent);
    return ErrorListComponent;
}());
exports.ErrorListComponent = ErrorListComponent;
//# sourceMappingURL=error-list.component.js.map