"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalKg = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            totalKg = totalKg + item.massKg;
        }
        return totalKg;
    };
    Rocket.prototype.currentMassKg = function () {
        var sumMass = 0;
        var astronautTotal = 0;
        var cargoItemsTotal = 0;
        for (var _i = 0, _a = this.astronauts; _i < _a.length; _i++) {
            var item = _a[_i];
            astronautTotal += item.massKg;
        }
        for (var _b = 0, _c = this.cargoItems; _b < _c.length; _b++) {
            var item = _c[_b];
            cargoItemsTotal += item.massKg;
        }
        sumMass += cargoItemsTotal;
        return sumMass;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports["default"] = Rocket;