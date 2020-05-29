import WorldObject from "./WorldObject";
import Engine from "./Engine";
import {Vector2D} from "./Containers";

class World {
    public readonly worldObjects: Map<string, WorldObject>;
    public cameraPosition: Vector2D<number>;
    private _engine: Engine | null;

    constructor(worldObjects: WorldObject[], cameraPosition: Vector2D<number> = {x: 0, y: 0}) {
        this.worldObjects = new Map<string, WorldObject>();
        for (let i = 0; i < worldObjects.length; i++) {
            if (this.worldObjects.has(worldObjects[i].id)) throw Error(`[Multiplication of Object ID: ${worldObjects[i].id}]`);
            this.worldObjects.set(worldObjects[i].id, worldObjects[i]);
        }
        this.cameraPosition = cameraPosition;
        this._engine = null;
    }

    public bindEngineInstance(engine: Engine) {
        this._engine = engine;
    }

    public setup() {
        for (let [key, value] of this.worldObjects) {
            value.bindEngineInstance(<Engine> this._engine);
            value.bindWorldInstance(this);
            value.setup();
        }
    }

    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        for (let [key, value] of this.worldObjects)
            if (!value.update(elapsedTime))
                return false;
        return true;
    }

    public addWorldObject(worldObject: WorldObject): void {
        if (this._engine?.isSetupStarted) {
            worldObject.bindEngineInstance(<Engine> this._engine);
            worldObject.bindWorldInstance(this);
            worldObject.setup();
        }
        if (!this.worldObjects.has(worldObject.id))
            this.worldObjects.set(worldObject.id, worldObject);
        else throw Error(`[Multiplication of Object ID: ${worldObject.id}]`);
    }

    public removeWorldObject(id: string): void {
        this.worldObjects.delete(id);
    }

    public getWorldObject(id: string): WorldObject {
        return <WorldObject> this.worldObjects.get(id);
    }

    public get worldObjectsCount(): number {
        return this.worldObjects.size;
    }

}

export default World;