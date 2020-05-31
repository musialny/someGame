/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import {Vector2D} from "./Containers";
import Texture from "./Texture";
import Engine from "./Engine";
import World from "./World";

abstract class WorldObject {
    public readonly id: string;
    public parent: string | boolean;
    protected _transform: Vector2D<number>;
    protected _texture: Texture;
    protected _engine: Engine | null;
    protected _world: World | null;

    protected constructor(id: string, transform: Vector2D<number>, texture: Texture, parent: string | boolean = false) {
        this.id = id;
        this.parent = parent;
        this._transform = transform;
        this._texture = texture;
        this._engine = null;
        this._world = null;
    }

    public bindEngineInstance(engine: Engine) {
        this._engine = engine;
    }

    public bindWorldInstance(world: World) {
        this._world = world;
    }

    public get absoluteTransform(): Vector2D<number> {
        if (typeof(this.parent) === "string") {
            const lastObject = this._world?.getWorldObject(this.parent);
            if (typeof(lastObject) === "undefined")
                return this._transform;
            return {x: this._transform.x + lastObject.absoluteTransform.x, y: this._transform.y + lastObject.absoluteTransform.y};
        } else return this._transform;
    }

    public get texture(): Texture {
        return this._texture;
    }

    public get transform(): Vector2D<number> {
        return this._transform;
    }

    public abstract setup(): void;

    public abstract update(elapsedTime: DOMHighResTimeStamp): boolean;
}

export default WorldObject;
