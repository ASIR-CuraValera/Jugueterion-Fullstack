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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require("rxjs/add/operator/map");
var JugueteService = (function () {
    function JugueteService(_http) {
        this._http = _http;
        this.url = "http://localhost/iaw/jugueterion-fs/symfony/web/app_dev.php";
    }
    JugueteService.prototype.create = function (token, juguete) {
        var json = JSON.stringify(juguete);
        var params = "json=" + json + "&authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/juguete/new", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    JugueteService.prototype.update = function (token, juguete, id) {
        var json = JSON.stringify(juguete);
        var params = "json=" + json + "&authorization=" + token;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + "/juguete/edit/" + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    JugueteService.prototype.getJuguete = function (id) {
        return this._http.get(this.url + "/juguete/detail/" + id).map(function (res) { return res.json(); });
    };
    JugueteService.prototype.getLastJuguetes = function () {
        return this._http.get(this.url + "/juguete/last").map(function (res) { return res.json(); });
    };
    JugueteService.prototype.getJuguetes = function (page) {
        if (page == null)
            page = 1;
        return this._http.get(this.url + "/juguete/list?page=" + page).map(function (res) { return res.json(); });
    };
    JugueteService.prototype.search = function (search, page) {
        if (search === void 0) { search = null; }
        if (page === void 0) { page = null; }
        if (page == null)
            page = 1;
        var http;
        if (search == null)
            http = this._http.get(this.url + "/juguete/search").map(function (res) { return res.json(); });
        else
            http = this._http.get(this.url + "/juguete/search/" + search + "?page=" + page).map(function (res) { return res.json(); });
        return http;
    };
    JugueteService.prototype.getProfile = function (user, page) {
        if (page === void 0) { page = null; }
        if (page == null)
            page = 1;
        return this._http.get(this.url + "/user/profile/" + user + "?page=" + page).map(function (res) { return res.json(); });
    };
    JugueteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JugueteService);
    return JugueteService;
}());
exports.JugueteService = JugueteService;
//# sourceMappingURL=juguete.service.js.map