/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import {platformImage} from "../Assets";
import Player from "./Player";


class Platform extends WorldObject {
    private static _id: number = 0;
    private _player: Player | undefined;

    constructor(transform: Vector2D<number>) {
        super("Box" + Platform._id++, transform, platformImage);
        this._player = undefined;
    }

    setup() {
        this._player = <Player> this._world?.getWorldObject("Player");
    }

    update(elapsedTime: DOMHighResTimeStamp): boolean {
        if (typeof(this._player) !== "undefined") {
            const playerCollisionVertices: Vector2D<number>[] = [
                {
                    x: this._player?.absoluteTransform.x + this._player.texture.size.x,
                    y: this._player?.absoluteTransform.y + this._player.texture.size.y
                },
                {
                    x: this._player?.absoluteTransform.x,
                    y: this._player?.absoluteTransform.y + this._player.texture.size.y - 30
                }
            ];
            const platformCollisionVertices: Vector2D<number>[] = [
                {
                    x: this.absoluteTransform.x,
                    y: this.absoluteTransform.y
                },
                {
                    x: this.absoluteTransform.x + this._texture.size.x,
                    y: this.absoluteTransform.y
                },
            ];
            if (playerCollisionVertices[0].x >= platformCollisionVertices[0].x
                && playerCollisionVertices[0].y >= platformCollisionVertices[0].y
                && playerCollisionVertices[1].x <= platformCollisionVertices[0].x
                && playerCollisionVertices[1].y <= platformCollisionVertices[0].y ||
                playerCollisionVertices[0].x >= platformCollisionVertices[1].x
                && playerCollisionVertices[0].y >= platformCollisionVertices[1].y
                && playerCollisionVertices[1].x <= platformCollisionVertices[1].x
                && playerCollisionVertices[1].y <= platformCollisionVertices[1].y)
                this._player.triggerCollision(this.id);
        }
        return true;
    }
}

export default Platform;