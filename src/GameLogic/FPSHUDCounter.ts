/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import {TextHUDPrimitive} from "../Engine/Texture";

class FPSHUDCounter extends WorldObject {
    private _fps: number;
    private _fpsCounter: number;
    private _timer: number;

    constructor(transform: Vector2D<number>) {
        super("FPSHUDCounter", transform, new TextHUDPrimitive("OwO", "24px serif", "#ffffff"));
        this._fps = 0;
        this._fpsCounter = 0;
        this._timer = 0;
    }

    setup() {}

    update(elapsedTime: DOMHighResTimeStamp): boolean {
        this._timer += elapsedTime;
        if (this._timer >= 1000) {
            this._timer = 0;
            this._fpsCounter = this._fps;
            this._fps = 0;
        }
        (<TextHUDPrimitive> this._texture).text = "FPS: " + this._fpsCounter;
        this._fps++;
        return true;
    }
}

export default FPSHUDCounter;