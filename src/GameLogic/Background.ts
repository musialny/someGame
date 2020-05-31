/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import {ImageTexture} from "../Engine/Texture";

// Assets
// @ts-ignore
import background from "../Resources/background.png";

class Background extends WorldObject {
    constructor(transform: Vector2D<number>) {
        super("Background", transform, new ImageTexture({x: 1920, y: 2160}, 0, background));
    }

    public setup() {

    }

    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        return true;
    }
}

export default Background;
