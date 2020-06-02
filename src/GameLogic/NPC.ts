/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import Texture from "../Engine/Texture";
import {
    NPCBlueWalking1Left,
    NPCBlueWalking1Right,
    NPCBlueWalking2Left,
    NPCBlueWalking2Right,
    NPCBlueDeadRight,
    NPCBlueDeadLeft,
    NPCBlueBite1Right,
    NPCBlueBite1Left,
    NPCBlueBite2Right,
    NPCBlueBite2Left
} from "../Assets";

class NPC extends WorldObject {
    private static _id: number = 0;
    private readonly _textures: Texture[];
    private readonly _startX: number;
    private readonly _endX: number;
    private _isLeft: boolean;
    private _walkingTimer: number;

    constructor(transform: Vector2D<number>, tiles: number) {
        super("NPC" + NPC._id++, transform, NPCBlueWalking1Right);
        this._textures = [NPCBlueWalking1Left, NPCBlueWalking2Left, NPCBlueWalking1Right, NPCBlueWalking2Right,
            NPCBlueDeadRight, NPCBlueDeadLeft, NPCBlueBite1Right, NPCBlueBite1Left, NPCBlueBite2Right,
            NPCBlueBite2Left];
        this._startX = transform.x;
        this._endX = transform.x + 172 * (tiles - 1);
        this._isLeft = false;
        this._walkingTimer = 0;
    }

    public setup() {}

    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        this._walkingTimer += elapsedTime;
        if (this._isLeft) {
            if (this._walkingTimer <= 400)
                this._texture = this._textures[0];
            else if (this._walkingTimer <= 800)
                this._texture = this._textures[1];
            else if (this._walkingTimer <= 1200)
                this._walkingTimer = 0;
            this._transform.x -= 0.5 * elapsedTime;
        } else {
            if (this._walkingTimer <= 400)
                this._texture = this._textures[2];
            else if (this._walkingTimer <= 800)
                this._texture = this._textures[3];
            else if (this._walkingTimer <= 1200)
                this._walkingTimer = 0;
            this._transform.x += 0.5 * elapsedTime;
        }

        if (this.absoluteTransform.x >= this._endX)
            this._isLeft = true;
        else if (this.absoluteTransform.x <= this._startX)
            this._isLeft = false;

        return true;
    }

}

export default NPC;
