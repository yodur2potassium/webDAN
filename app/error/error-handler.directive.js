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
// Importe Input, OnChanges, SimpleChange pour surveiller et gérer les changemeents d'états
// Importe Directive, ElementRef et HostListener pour assigner la directive à un élément du DOM
// et surveiller le click de l'utilisateur
var core_1 = require("@angular/core");
var ErrorHandlerDirective = (function () {
    // Assigne l'élement HTML sur lequel est placé ErrorHandlerDirective
    function ErrorHandlerDirective(el) {
        this._selectedBorder = "3px solid rgb(255, 0, 0)";
        this._selectedShadow = "1px 1px 12px rgb(255, 0, 0)";
        this._displayedBorder = "3px solid rgb(252,166,38)";
        this._displayedShadow = "1px 1px 12px rgb(252,166,38)";
        this.isDisplayed = 0;
        this.el = el.nativeElement;
    }
    // Surveille les changements et assigne le style displayed
    ErrorHandlerDirective.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = chng.currentValue;
            var prev = chng.previousValue;
            if (1 == cur) {
                this.el.style.border = this._displayedBorder;
                this.el.style.boxShadow = this._displayedShadow;
            }
        }
    };
    // Surveille le clic de l'utilisateur sur l'élément du DOM associé et assigne le style selected
    ErrorHandlerDirective.prototype.onClick = function () {
        this.el.style.border = this._selectedBorder;
        this.el.style.boxShadow = this._selectedShadow;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ErrorHandlerDirective.prototype, "isDisplayed", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ErrorHandlerDirective.prototype, "onClick", null);
    ErrorHandlerDirective = __decorate([
        core_1.Directive({
            selector: '[myErrorHandler]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ErrorHandlerDirective);
    return ErrorHandlerDirective;
}());
exports.ErrorHandlerDirective = ErrorHandlerDirective;
//# sourceMappingURL=error-handler.directive.js.map