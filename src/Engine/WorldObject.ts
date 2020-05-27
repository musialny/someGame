import {Vector2D} from "./Containers";
import Texture from "./Texture";

abstract class WorldObject {
    protected _transform: Vector2D<number>;
    protected _texture: Texture;

    protected constructor(transform: Vector2D<number>, texture: Texture) {
        this._transform = transform;
        this._texture = texture;
    }

    abstract setup(): void;

    abstract update(elapsedTime: DOMHighResTimeStamp): boolean;
}

export default WorldObject;
