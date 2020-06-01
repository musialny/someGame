/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import Texture from "../Engine/Texture";
import Camera from "./Camera";

class Player extends WorldObject {
    public readonly moveDistance: number;
    private readonly _textures: Texture[];
    private _isJumping: boolean;
    private _faceLeft: boolean;
    private _isGunFiredAnimation: boolean;
    private _fallingTimer: number;
    private _walkAnimationTimer: number;
    private _GunFiredTimer: number;

    constructor(transform: Vector2D<number>, textures: Texture[]) {
        super("Player", transform, textures[1]);
        this.moveDistance = 1.5;
        this._textures = textures;
        this._isJumping = false;
        this._faceLeft = false;
        this._isGunFiredAnimation = false;
        this._fallingTimer = 0;
        this._walkAnimationTimer = 0;
        this._GunFiredTimer = 0;
    }

    public setup() {
        // @ts-ignore
        this._world?.addWorldObject(new Camera({x: (-this._engine?.fov.x / 2) + (this._texture.size.x / 2), y: (-this._engine?.fov.y / 2) + (this._texture.size.y / 2)}));
    }

    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        if (this._engine?.window.keyLogger.get("MouseButton") === "mouseup") {
            this._GunFiredTimer = 0;
            this._isGunFiredAnimation = false;
        }

        if (this._faceLeft)
            if (this._isJumping) {
                if (this._engine?.window.keyLogger.get("MouseButton") === "mousedown" && !this._isGunFiredAnimation) {
                    this._GunFiredTimer += elapsedTime;
                    if (this._GunFiredTimer <= 200)
                        this._texture = this._textures[10];
                    else this._isGunFiredAnimation = true;
                } else this._texture = this._textures[2];
            }
            else if (this._engine?.window.keyLogger.get("MouseButton") === "mousedown" && !this._isGunFiredAnimation) {
                this._GunFiredTimer += elapsedTime;
                if (this._GunFiredTimer <= 200)
                    this._texture = this._textures[8];
                else this._isGunFiredAnimation = true;
            }
            else if (this._engine?.window.keyLogger.get("KeyA") === "keydown") {
                this._walkAnimationTimer += elapsedTime;
                if (this._walkAnimationTimer <= 400)
                    this._texture = this._textures[5];
                else if (this._walkAnimationTimer <= 800)
                    this._texture = this._textures[4];
                else if (this._walkAnimationTimer <= 1200)
                    this._walkAnimationTimer = 0;
            } else this._texture = this._textures[0];
        else if (this._isJumping) {
            if (this._engine?.window.keyLogger.get("MouseButton") === "mousedown" && !this._isGunFiredAnimation) {
                this._GunFiredTimer += elapsedTime;
                if (this._GunFiredTimer <= 200)
                    this._texture = this._textures[11];
                else this._isGunFiredAnimation = true;
            } else this._texture = this._textures[3];
        }
        else if (this._engine?.window.keyLogger.get("MouseButton") === "mousedown" && !this._isGunFiredAnimation) {
            this._GunFiredTimer += elapsedTime;
            if (this._GunFiredTimer <= 200)
                this._texture = this._textures[9];
            else this._isGunFiredAnimation = true;
        }
        else if (this._engine?.window.keyLogger.get("KeyD") === "keydown") {
            this._walkAnimationTimer += elapsedTime;
            if (this._walkAnimationTimer <= 400)
                this._texture = this._textures[7];
            else if (this._walkAnimationTimer <= 800)
                this._texture = this._textures[6];
            else if (this._walkAnimationTimer <= 1200)
                this._walkAnimationTimer = 0;
        } else this._texture = this._textures[1];

        if (this._engine?.window.keyLogger.get("KeyA") === "keydown") {
            const transform = this._transform.x - this.moveDistance * elapsedTime;
            if (transform >= 0)
            this._transform.x = transform;
            this._faceLeft = true;
        }
        if (this._engine?.window.keyLogger.get("KeyD") === "keydown") {
            this._transform.x += this.moveDistance * elapsedTime;
            this._faceLeft = false;
        }

        let transform = this._transform.y + (0.1 * this._fallingTimer) / 2;
        if (transform <= 2160 - this._texture.size.y) {
            this._fallingTimer += elapsedTime;
        } else {
            this._fallingTimer = 0;
            this._isJumping = false;
            transform = this._transform.y;
        }

        if (this._engine?.window.keyLogger.get("Space") === "keydown" && !this._isJumping) {
            this._fallingTimer = -500;
            this._isJumping = true;
        }

        if (transform >= 0)
            this._transform.y = transform;
        else this._fallingTimer = 0;

        return true;
    }
}

export default Player;
