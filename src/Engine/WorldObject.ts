import {Vector2D} from "./Containers";
import Texture from "./Texture";
import Engine from "./Engine";
import World from "./World";

abstract class WorldObject {
    public readonly id: string;
    protected _transform: Vector2D<number>;
    protected _texture: Texture;
    protected _engine: Engine | null;
    protected _world: World | null;

    protected constructor(id: string, transform: Vector2D<number>, texture: Texture) {
        this.id = id;
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

    public abstract setup(): void;

    public abstract update(elapsedTime: DOMHighResTimeStamp): boolean;
}

export default WorldObject;
