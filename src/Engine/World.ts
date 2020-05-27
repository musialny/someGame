import WorldObject from "./WorldObject";
import Engine from "./Engine";
import {Vector2D} from "./Containers";

class World {
    private _worldObjects: WorldObject[];
    private _cameraPosition: Vector2D<number>;
    private _engine: Engine | null;

    constructor(worldObjects: WorldObject[], cameraPosition: Vector2D<number> = {x: 0, y: 0}) {
        this._worldObjects = worldObjects;
        this._cameraPosition = cameraPosition;
        this._engine = null;
    }

    public bindEngineInstance(engine: Engine) {
        this._engine = engine;
    }

    public setup() {
        for (let i = 0; i < this._worldObjects.length; i++)
            this._worldObjects[i].setup();
    }

    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        for (let i = 0; i < this._worldObjects.length; i++)
            if (!this._worldObjects[i].update(elapsedTime))
                return false;
        return true;
    }

    public get cameraPosition() {
        return this._cameraPosition;
    }

    public get worldObjects() {
        return this._worldObjects;
    }

    public get engine() {
        return this._engine;
    }

}

export default World;