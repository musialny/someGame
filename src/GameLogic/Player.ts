/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import {RectanglePrimitive} from "../Engine/Texture";
import Camera from "./Camera";

class Player extends WorldObject {
    public readonly moveDistance: number;
    constructor(transform: Vector2D<number>) {
        super("Player", transform, new RectanglePrimitive({x: 100, y: 100}, 2, "#004ec3"));
        this.moveDistance = 1.5;
    }

    public setup() {
        // @ts-ignore
        this._world?.addWorldObject(new Camera({x: (-this._engine?.fov.x / 2) + (this._texture.size.x / 2), y: (-this._engine?.fov.y / 2) + (this._texture.size.y / 2)}));
    }

    private timer = 0;
    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        this.timer += elapsedTime;
        if (this._engine?.window.keyLogger.get("KeyW") === "keydown") {
            const transform = this._transform.y - this.moveDistance * elapsedTime;
            if (transform >= 0)
                this._transform.y = transform;
        }
        if (this._engine?.window.keyLogger.get("KeyS") === "keydown") {
            const transform = this._transform.y + this.moveDistance * elapsedTime;
            if (transform <= 2160 - this._texture.size.y)
            this._transform.y = transform;
        }
        if (this._engine?.window.keyLogger.get("KeyA") === "keydown") {
            const transform = this._transform.x - this.moveDistance * elapsedTime;
            if (transform >= 0)
            this._transform.x = transform;
        }
        if (this._engine?.window.keyLogger.get("KeyD") === "keydown")
            this._transform.x += this.moveDistance * elapsedTime;
        return true;
    }
}

export default Player;
