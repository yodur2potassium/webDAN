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
var search_component_1 = require("../search/search.component");
var error_list_component_1 = require("../error/error-list.component");
var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.emitShowError = new core_1.EventEmitter();
        this.emitDetailError = new core_1.EventEmitter();
    }
    ToolbarComponent.prototype.displayErrors = function () {
        this.emitShowError.emit('DISPLAY_ERRORS');
    };
    ToolbarComponent.prototype.onSelect = function ($event) {
        var error = $event;
        this.emitDetailError.emit(error);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ToolbarComponent.prototype, "errors", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ToolbarComponent.prototype, "emitShowError", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ToolbarComponent.prototype, "emitDetailError", void 0);
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'my-toolbar',
            template: "\n    <div id=\"toolbar\" class=\"input-group\" aria-label=\"...\">\n        <div class=\"input-group-btn\">\n          <my-error-list [errors]=\"errors\" (emitDetailError)=\"onSelect($event)\"></my-error-list>\n          <button class=\"btn btn-default\" (click)=\"displayErrors()\">Afficher les erreurs de la page</button>\n        </div>\n        <my-search [errors]='errors'></my-search>\n    </div>\n  ",
            directives: [search_component_1.SearchComponent, error_list_component_1.ErrorListComponent],
            styles: ["\n    #toolbar{\n        background-color: lightgreen;\n        min-height: 15px;\n    }"]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map