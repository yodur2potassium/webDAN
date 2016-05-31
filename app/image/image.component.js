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
// ImageComponent, affiche une image avec sa descritpion et un sous titre si présent
// Importe Component pour la déclaration
var core_1 = require("@angular/core");
var image_1 = require("./image");
// Déclare la balise custom et le template
var ImageComponent = (function () {
    function ImageComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', image_1.Image)
    ], ImageComponent.prototype, "image", void 0);
    ImageComponent = __decorate([
        core_1.Component({
            selector: 'my-image',
            template: "\n    <section *ngIf=\"image\" role=\"group\">\n    <img src={{image.source}} class=\"img-responsive center-block\" alt={{image.description}}>\n    <figcaption *ngIf=\"image.caption\" class=\"text-center\">{{image.caption}}</figcaption>\n    </section>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;
//# sourceMappingURL=image.component.js.map