import WorldObject from "./WorldObject";
import Engine from "./Engine";

class World {
    // private _worldObjects: WorldObject[];
    protected _engine: Engine | null;

    constructor(/*worldObjects: WorldObject[]*/) {
        // this._worldObjects = worldObjects;
        this._engine = null;
    }

    public bindEngineInstance(engine: Engine) {
        this._engine = engine;
    }

    public setup() {
        console.log("Setup was called");
    }

    private time = 0;
    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        this.time += elapsedTime;
        // console.log("Elapsed time: " + elapsedTime);
        console.log("Timer: " + this.time);
        if (this.time >= 80) {
            this.time = 0;
            this._engine?.bindWorld(1);
        }
        return true;
    }

}

export default World;