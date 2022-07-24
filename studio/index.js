"use strict";
// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html
exports.__esModule = true;
// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.
let Astronaut_1 = require("./Astronaut");
let Cargo_1 = require("./Cargo");
let Rocket_1 = require("./Rocket");
let falcon9 = new Rocket_1["default"]('Falcon 9', 7500);
let astronauts = [
    new Astronaut_1["default"](75, 'Mae'),
    new Astronaut_1["default"](81, 'Sally'),
    new Astronaut_1["default"](99, 'Charles')
];
for (let i = 0; i < astronauts.length; i++) {
    let astronaut = astronauts[i];
    let status_1 = '';
    if (falcon9.addAstronaut(astronaut)) {
        status_1 = "On board";
    }
    else {
        status_1 = "Not on board";
    }
    console.log("".concat(astronaut.name, ": ").concat(status_1));
}
let cargo = [
    new Cargo_1["default"](3107.39, "Satellite"),
    new Cargo_1["default"](1000.39, "Space Probe"),
    new Cargo_1["default"](753, "Water"),
    new Cargo_1["default"](541, "Food"),
    new Cargo_1["default"](2107.39, "Tesla Roadster"),
];
for (let i = 0; i < cargo.length; i++) {
    let c = cargo[i];
    let loaded = '';
    if (falcon9.addCargo(c)) {
        loaded = "Loaded";
    }
    else {
        loaded = "Not loaded";
    }
    console.log("".concat(c.material, ": ").concat(loaded));
}
console.log("Final cargo and astronaut mass: ".concat(falcon9.currentMassKg(), " kg."));