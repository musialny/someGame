import WorldObject from "./WorldObject";

class World {
    // private _worldObjects: WorldObject[];

    constructor(/*worldObjects: WorldObject[]*/) {
        // this._worldObjects = worldObjects;
    }

    setup() {
        console.log("Setup was called");
    }

    update(elapsedTime: DOMHighResTimeStamp) {
        console.log("Elapsed time: " + elapsedTime);
    }

}

export default World;