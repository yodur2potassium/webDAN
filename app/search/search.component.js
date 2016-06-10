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
var SearchComponent = (function () {
    function SearchComponent() {
        this.values = '';
    }
    SearchComponent.prototype.onKey = function (value) {
        var _this = this;
        this.values = value;
        this.results = [];
        if (this.values.length > 3) {
            var input = '\\b' + this.values;
            var regexp_1 = new RegExp(input, 'i');
            var results = this.errors.map(function (error) {
                return regexp_1.test(error.title) ? error : undefined;
                // let res = regexp.test(error.title)
                // console.log(res);
            });
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
            template: "\n    <input #box (keyup)=\"onKey(box.value)\">\n    <div>\n      <ul>\n        <li *ngFor=\"let result of results\"><h3 *ngIf=\"result\">{{ result.title }}</h3></li>\n      </ul>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map