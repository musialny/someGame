/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import {bulletLeftImage, bulletRightImage} from "../Assets";

class Bullet extends WorldObject {
    private static _id: number = 0;
    private _lifetime: number;
    private readonly _isLeft: boolean;

    constructor(transform: Vector2D<number>, isLeft: boolean = false) {
        super("Bullet" + Bullet._id++, transform, isLeft ? bulletLeftImage : bulletRightImage);
        this._lifetime = 0;
        this._isLeft = isLeft;
    }

    public setup() {}

    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        this._lifetime += elapsedTime;
        if (this._lifetime >= 700)
            this._world?.removeWorldObject(this.id);

        if (this._isLeft)
            this._transform.x -= 4 * elapsedTime;
        else this._transform.x += 4 * elapsedTime;

        return true;
    }
}

export default Bullet;
