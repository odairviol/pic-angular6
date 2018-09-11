"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var veiculo_1 = require("./veiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(motorista, cor) {
        var _this = _super.call(this, 2, cor, "Honda", motorista) || this;
        _this.motorista = motorista;
        _this.cor = cor;
        return _this;
    }
    Moto.prototype.acelerar = function () {
        console.log("Odair acelerando a moto");
    };
    Moto.prototype.desacelerar = function () {
        console.log("Odair desacelerando a moto");
    };
    Moto.prototype.obterMarca = function () {
        return this.marca;
    };
    return Moto;
}(veiculo_1.Veiculo));
exports.Moto = Moto;
//# sourceMappingURL=moto.js.map