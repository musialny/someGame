/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import {EmptyPrimitive} from "../Engine/Texture";
import Platform from "./Platform";
import Player from "./Player";

class Generator extends WorldObject{
    private static _id: number = 0;
    private _isMapGenerated: boolean
    private _isMapGeneratorNextChunkSummoned: boolean;
    private _platformSpawnPoints: Vector2D<number>[];
    private _player: Player | undefined;

    constructor(transform: Vector2D<number>) {
        super("Generator" + Generator._id++, transform, new EmptyPrimitive());
        this._isMapGenerated = false;
        this._isMapGeneratorNextChunkSummoned = false;
        this._player = undefined;
        this._platformSpawnPoints = [
            {
                x: 350,
                y: 460
            },
            {
                x: 350 * 2,
                y: 460 * 2
            },
            {
                x: 350 * 3,
                y: 460 * 2
            },
            {
                x: 350 * 2,
                y: 460 * 3
            },
            {
                x: 350 * 4,
                y: 460 * 4
            },
            {
                x: 350 * 3,
                y: 460 * 3
            },
            {
                x: 350 * 5,
                y: 460 * 3
            },
            {
                x: 350 * 4,
                y: 460 * 4
            },
            {
                x: 350 * 5,
                y: 460 * 4
            },
            {
                x: 350 * 2,
                y: 460 * 4
            }
        ];
    }

    public setup() {
        this._player = <Player> this._world?.getWorldObject("Player");
    }

    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        if (!this._isMapGenerated) {
            const avoidDuplication = new Map<number, boolean>();
            for (let i = 0; i < 5; i++) {
                const platformLength = Math.floor(Math.random() * (5 - 1) + 1);
                let platformSpawnPoint = 0;
                do {
                    platformSpawnPoint = Math.floor(Math.random() * this._platformSpawnPoints.length);
                } while (avoidDuplication.has(platformSpawnPoint))
                avoidDuplication.set(platformSpawnPoint, true);
                console.log(platformSpawnPoint);
                for (let o = 0; o < platformLength; o++)
                    this._world?.addWorldObject(new Platform({
                        x: this.absoluteTransform.x + this._platformSpawnPoints[platformSpawnPoint].x + (172 * o),
                        y: this.absoluteTransform.y + this._platformSpawnPoints[platformSpawnPoint].y
                    }));
            }
            this._isMapGenerated = true;
        }
        if (!this._isMapGeneratorNextChunkSummoned)
            if (typeof(this._player) !== "undefined")
                if (this._player.absoluteTransform.x + this._player.texture.size.x >= this._transform.x
                    && this._player.absoluteTransform.y + this._player.texture.size.y >= this._transform.y
                    && this._player.absoluteTransform.x <= this._transform.x + 1920
                    && this._player.absoluteTransform.y <= this._transform.y + 2160) {
                    this._world?.addWorldObject(new Generator({x: this._transform.x + 1920, y: 0}));
                    this._isMapGeneratorNextChunkSummoned = true;
                }

        return true;
    }
}

export default Generator;
