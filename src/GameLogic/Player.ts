import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import {RectanglePrimitive} from "../Engine/Texture";

class Player extends WorldObject {
    constructor(transform: Vector2D<number>) {
        super("Player", transform, new RectanglePrimitive({x: 100, y: 100}, "#004ec3"));
    }

    setup() {

    }

    private timer = 0;
    update(elapsedTime: DOMHighResTimeStamp): boolean {
        const moveOffset = 3;
        this.timer += elapsedTime;
        if (this._engine?.window.keyLogger.get("KeyW") === "keydown" /*&& this._transform.y > 0*/)
            this._transform.y -= moveOffset;
        if (this._engine?.window.keyLogger.get("KeyS") === "keydown"  /*&& this._transform.y < this._engine.window.contextSize.y - this._texture.size.y*/)
            this._transform.y += moveOffset;
        if (this._engine?.window.keyLogger.get("KeyA") === "keydown"  /*&& this._transform.x > 0*/)
            this._transform.x -= moveOffset;
        if (this._engine?.window.keyLogger.get("KeyD") === "keydown" /*&& this._transform.x < this._engine.window.contextSize.x - this._texture.size.x*/)
            this._transform.x += moveOffset;

        // @ts-ignore
        this._world?.cameraPosition = {x: this._transform.x - (this._engine?.window.contextSize.x / 2 - this._texture.size.x / 2), y: this._transform.y - (this._engine?.window.contextSize.y / 2 - this._texture.size.y / 2)};

        return true;
    }
}

export default Player;
