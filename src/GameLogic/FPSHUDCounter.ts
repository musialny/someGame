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
    constructor(transform: Vector2D<number>) {
        super("FPSHUDCounter", transform, new TextHUDPrimitive("OwO", "24px serif", "#ffffff"));
    }

    setup() {}

    update(elapsedTime: DOMHighResTimeStamp): boolean {
        (<TextHUDPrimitive> this._texture).text = "FPS: " + Math.floor(1000 / elapsedTime).toString();
        return true;
    }
}

export default FPSHUDCounter;