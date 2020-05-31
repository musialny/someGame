/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import {RectanglePrimitive} from "../Engine/Texture";

class Player extends WorldObject {
    public readonly moveDistance: number;
    constructor(transform: Vector2D<number>) {
        super("Player", transform, new RectanglePrimitive({x: 100, y: 100}, 2, "#004ec3"));
        this.moveDistance = 1.5;
    }

    setup() {
        // @ts-ignore
        // this._world?.cameraPosition = {x: this._transform.x - (this._engine?.window.contextSize.x / 2 - this._texture.size.x / 2), y: this._transform.y - (this._engine?.window.contextSize.y / 2 - this._texture.size.y / 2)};
    }

    private timer = 0;
    update(elapsedTime: DOMHighResTimeStamp): boolean {
        this.timer += elapsedTime;
        if (this._engine?.window.keyLogger.get("KeyW") === "keydown")
            this._transform.y -= this.moveDistance * elapsedTime;
        if (this._engine?.window.keyLogger.get("KeyS") === "keydown")
            this._transform.y += this.moveDistance * elapsedTime;
        if (this._engine?.window.keyLogger.get("KeyA") === "keydown")
            this._transform.x -= this.moveDistance * elapsedTime;
        if (this._engine?.window.keyLogger.get("KeyD") === "keydown")
            this._transform.x += this.moveDistance * elapsedTime;

        // @ts-ignore
        this._world?.cameraPosition = {x: this._transform.x - (this._engine?.window.contextSize.x / 2 - this._texture.size.x / 2), y: this._transform.y - (this._engine?.window.contextSize.y / 2 - this._texture.size.y / 2)};

        return true;
    }
}

export default Player;
