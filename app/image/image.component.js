// ImageComponent, affiche une image avec sa descritpion et un sous titre si présent
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
// Importe Component pour la déclaration, Input OnChanges et SimpleChange pour gerer les changements d'états
var core_1 = require("@angular/core");
var image_1 = require("./image");
var error_handler_directive_1 = require("../error/error-handler.directive");
// Déclare le composant
var ImageComponent = (function () {
    function ImageComponent() {
        this.isDisplayed = false;
    }
    ImageComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = chng.currentValue;
            var prev = chng.previousValue;
            if ('DISPLAY_ERRORS' == cur) {
                this.displayErrors(this.image);
            }
        }
    };
    ImageComponent.prototype.displayErrors = function (image) {
        if (image && image.errors[0]) {
            this.isDisplayed = true;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', image_1.Image)
    ], ImageComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageComponent.prototype, "broadcast", void 0);
    ImageComponent = __decorate([
        core_1.Component({
            // Déclare la balise HTML personalisée
            selector: 'my-image',
            // Déclare le bloc d'affichage HMTL
            template: "\n    <figure *ngIf=\"image\" role=\"group\" (click)=displayErrors(image)>\n      <img src={{image.source}} class=\"img-responsive center-block\" alt={{image.description}} myErrorHandler>\n      <figcaption class=\"text-center\">{{image.caption}}</figcaption>\n    </figure>\n  ",
            styles: ["\n    .selected{\n      border: 3px solid rgb(255, 0, 0);\n      background-color: rgb(255, 255, 0);\n      color: rgb(0, 0, 0);\n      box-shadow: 1px 1px 12px rgb(255, 0, 0);\n    }\n    "],
            // Déclare les directives
            directives: [error_handler_directive_1.ErrorHandlerDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;
//# sourceMappingURL=image.component.js.map