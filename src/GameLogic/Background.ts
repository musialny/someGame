/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import Player from "./Player";
import Camera from "./Camera";
import {backgroundImage} from "../Assets";

class Background extends WorldObject {
    private static _id: number = 0;
    private _isNextBackgroundSummoned: boolean;
    private _player: Player | undefined;
    private _camera: Camera | undefined;

    private _timer: number;
    private _moveDistance: number;

    constructor(transform: Vector2D<number>) {
        super("Background" + Background._id++, transform, backgroundImage);
        this._isNextBackgroundSummoned = false;
        this._player = undefined;
        this._camera = undefined;
        this._timer = 0;
        this._moveDistance = 0;
    }

    public setup() {
        this._player = <Player> this._world?.getWorldObject("Player");
        this._camera = <Camera> this._world?.getWorldObject("Camera");
        this._moveDistance = typeof(this._player?.moveDistance) !== "undefined" ? this._player?.moveDistance / 2 : 1.5;
    }

    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        if (!this._isNextBackgroundSummoned) {
            if (typeof(this._player) !== "undefined")
            if (this._player.absoluteTransform.x + this._player.texture.size.x >= this._transform.x
                && this._player.absoluteTransform.y + this._player.texture.size.y >= this._transform.y
                && this._player.absoluteTransform.x <= this._transform.x + this._texture.size.x
                && this._player.absoluteTransform.y <= this._transform.y + this._texture.size.y) {
                this._world?.addWorldObject(new Background({x: this._transform.x + 1920, y: 0}));
                this._isNextBackgroundSummoned = true;
            }
        }
        // @ts-ignore
        if (this._camera?.absoluteTransform.x > 0) {
            this._timer += elapsedTime;
            if (this._engine?.window.keyLogger.get("KeyA") === "keydown")
                this._transform.x -= this._moveDistance * elapsedTime;
            if (this._engine?.window.keyLogger.get("KeyD") === "keydown")
                this._transform.x += this._moveDistance * elapsedTime;
        }
        return true;
    }
}

export default Background;
