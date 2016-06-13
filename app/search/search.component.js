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
var core_1 = require("@angular/core");
// import { CORE_DIRECTIVES } from "@angular/common";
// import { DROPDOWN_DIRECTIVES } from "ng2-bootstrap";
var SearchComponent = (function () {
    function SearchComponent() {
        this.values = '';
    }
    // Fonction de recherche des erreurs, déclenchée par frappe clavier
    SearchComponent.prototype.onKey = function (value) {
        var _this = this;
        this.values = value;
        // Tableau de résultats ré-initialisé
        this.results = [];
        // Si plus de 3 caractères
        if (this.values.length > 3) {
            // Ajoute \b au debut de l'input utilisatuer pour rechercher le debut d'un mot
            var input = '\\b' + this.values;
            // Le parametre 'i' rend l'expression non sensible à la casse
            var regexp_1 = new RegExp(input, 'i');
            // Renvoie une copie du tableau d'erreurs avec résultat ou undefined
            var results = this.errors.map(function (error) {
                return regexp_1.test(error.title) ? error : undefined;
            });
            // Parcours le tableau de résultats et ajoute les erreurs trouvées a l'attribut results du component
            results.forEach(function (el) {
                el ? _this.results.push(el) : null;
            });
            console.log(this.results);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SearchComponent.prototype, "errors", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'my-search',
            template: "\n    <input #box (keyup)=\"onKey(box.value)\" placeholder=\"Entrez votre recherche...\">\n        <span *ngIf='results'>\n          <ul class=\"dropdown\">\n            <li *ngFor=\"let result of results\"><a class=\"dropdown-item\">{{ result.title }}</a></li>\n          </ul>\n        </span>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map