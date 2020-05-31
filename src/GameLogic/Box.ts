/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import {RectanglePrimitive} from "../Engine/Texture";

class Box extends WorldObject {
    private static _id: number = 0;
    constructor(transform: Vector2D<number>, size: number, parent: string | boolean = false) {
        super("Box" + Box._id++, transform, new RectanglePrimitive({x: size, y: size}, 1, "#059846"), parent);
    }

    setup() {}

    update(elapsedTime: DOMHighResTimeStamp): boolean {
        return true;
    }
}

export default Box;