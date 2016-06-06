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
var image_component_1 = require("../image/image.component");
var form_component_1 = require("../form/form.component");
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.images = IMAGES;
    }
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'my-sidebar',
            template: "\n    <div class=\"col-sm-4\" id=\"colonneDroite\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h2 class=\"panel-title\">En bref :</h2>\n        </div>\n        <div class=\"panel-body\">\n          <div *ngFor=\"let image of images\" class=\"img-side\">\n            <h4>{{image.description}}</h4>\n            <my-image [image]=\"image\"></my-image>\n          </div>\n        </div>\n        <!--<my-form></my-form>-->\n      </div>\n    </div>",
            directives: [image_component_1.ImageComponent, form_component_1.FormComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
var IMAGES = [
    { id: 100, source: "public/images/chereau-2016-2015-anneue-du-rebond.gif", description: "Clin d'oeil", caption: "", errors: [] },
    { id: 101, source: "public/images/20pp2016_videomv_legarzic.jpg", description: "En video", caption: "20 projets pur 202...", errors: [] },
    { id: 102, source: "public/images/com_forum-301_une.jpg", description: "ForumMag", caption: "ForumMag N°301", errors: [] },
];
//# sourceMappingURL=sidebar.component.js.map