import { Engine } from "./Engine"
import { Tyres } from "./Tyres"

export class Cars{
    engine
    tyre

    constructor(engine: Engine, tyre:Tyres){
        this.engine=engine
        this.tyre=tyre
    }
}