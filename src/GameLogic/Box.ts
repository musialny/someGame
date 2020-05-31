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
        super("Box" + Box._id, transform, new RectanglePrimitive({x: size, y: size}, 0, "#059846"), parent);
        Box._id++;
    }

    setup() {
        console.log(this.id);
    }

    update(elapsedTime: DOMHighResTimeStamp): boolean {
        console.log(`Parent of ${this.id} is "${this.parent}" and absolute is {x: ${this.absoluteTransform.x}, y: ${this.absoluteTransform.y}}`)
        return true;
    }
}

export default Box;