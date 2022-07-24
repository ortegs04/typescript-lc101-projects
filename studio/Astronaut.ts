import Payload from "./Payload";

export default class Astronaut implements Payload {
    massKg: number;
    name: string;
    constructor(massKg: number, name: string){
        this.massKg = massKg;
        this.name = name;
    }
}