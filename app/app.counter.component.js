"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AppCounterComponent = /** @class */ (function () {
    function AppCounterComponent() {
        this.msg = "This is property binding";
        this.counter = 0;
    }
    AppCounterComponent.prototype.increment = function () {
        this.counter++;
    };
    AppCounterComponent = __decorate([
        core_1.Component({
            selector: 'app-counter',
            template: "<input type=\"text\" value={{msg}} />                  <!--property binding using curly bracket-->\n            <input type=\"text\" [value]=msg />                       <!--property binding using square bracket-->\n            <input type=\"text\" [value]=counter /><br/>\n            <span [innerText]=counter></span>\n            <input type=\"button\" (click)=\"increment()\" value=\"Counter Increment\"/>              <!--2 way binding-->\n    "
        })
    ], AppCounterComponent);
    return AppCounterComponent;
}());
exports.AppCounterComponent = AppCounterComponent;
