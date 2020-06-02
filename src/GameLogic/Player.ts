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
import Bullet from "./Bullet";
import {
    playerDeadLeft,
    playerDeadRight,
    playerGunLeft,
    playerGunRight,
    playerJumpArmoredLeft,
    playerJumpArmoredRight,
    playerJumpLeft,
    playerJumpRight,
    playerStandLeft,
    playerStandRight,
    playerWalking1Left,
    playerWalking1Right,
    playerWalking2Left,
    playerWalking2Right
} from "../Assets";

class Player extends WorldObject {
    public readonly moveDistance: number;
    private readonly _textures: Texture[];
    private _isJumping: boolean;
    private _faceLeft: boolean;
    private _isGunFiredAnimation: boolean;
    private _isGunFired: boolean;
    private _fallingVelocity : number;
    private _walkAnimationTimer: number;
    private _GunFiredAnimationTimer: number;
    private _isCollide: boolean;

    constructor(transform: Vector2D<number>) {
        super("Player", transform, playerStandRight);
        this.moveDistance = 1.5;
        this._textures = [
            playerStandLeft, playerStandRight, playerJumpLeft, playerJumpRight,
            playerWalking1Left, playerWalking2Left, playerWalking1Right, playerWalking2Right,
            playerGunLeft, playerGunRight, playerJumpArmoredLeft, playerJumpArmoredRight,
            playerDeadLeft, playerDeadRight
        ];
        this._isJumping = false;
        this._faceLeft = false;
        this._isGunFiredAnimation = false;
        this._isGunFired = false;
        this._fallingVelocity  = 0;
        this._walkAnimationTimer = 0;
        this._GunFiredAnimationTimer = 0;
        this._isCollide = false;
    }

    public setup() {
        // @ts-ignore
        this._world?.addWorldObject(new Camera({x: (-this._engine?.fov.x / 2) + (this._texture.size.x / 2), y: (-this._engine?.fov.y / 2) + (this._texture.size.y / 2)}));
    }

    public triggerCollision(): void {
        this._isCollide = true;
    }

    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        if (this._engine?.window.keyLogger.get("MouseButton") === "mouseup") {
            this._GunFiredAnimationTimer = 0;
            this._isGunFiredAnimation = false;
            this._isGunFired = false;
        }

        if (this._faceLeft)
            if (this._isJumping && this._transform.y <= 1690) {
                if (this._engine?.window.keyLogger.get("MouseButton") === "mousedown" && !this._isGunFiredAnimation) {
                    this._GunFiredAnimationTimer += elapsedTime;
                    if (this._GunFiredAnimationTimer <= 200)
                        this._texture = this._textures[10];
                    else this._isGunFiredAnimation = true;
                } else this._texture = this._textures[2];
            }
            else if (this._engine?.window.keyLogger.get("MouseButton") === "mousedown" && !this._isGunFiredAnimation) {
                this._GunFiredAnimationTimer += elapsedTime;
                if (this._GunFiredAnimationTimer <= 200)
                    this._texture = this._textures[8];
                else this._isGunFiredAnimation = true;
            }
            else if (this._engine?.window.keyLogger.get("KeyA") === "keydown") {
                this._walkAnimationTimer += elapsedTime;
                if (this._walkAnimationTimer <= 200)
                    this._texture = this._textures[5];
                else if (this._walkAnimationTimer <= 400)
                    this._texture = this._textures[4];
                else if (this._walkAnimationTimer <= 800)
                    this._walkAnimationTimer = 0;
            } else this._texture = this._textures[0];
        else if (this._isJumping && this._transform.y <= 1690) {
            if (this._engine?.window.keyLogger.get("MouseButton") === "mousedown" && !this._isGunFiredAnimation) {
                this._GunFiredAnimationTimer += elapsedTime;
                if (this._GunFiredAnimationTimer <= 200)
                    this._texture = this._textures[11];
                else this._isGunFiredAnimation = true;
            } else this._texture = this._textures[3];
        }
        else if (this._engine?.window.keyLogger.get("MouseButton") === "mousedown" && !this._isGunFiredAnimation) {
            this._GunFiredAnimationTimer += elapsedTime;
            if (this._GunFiredAnimationTimer <= 200)
                this._texture = this._textures[9];
            else this._isGunFiredAnimation = true;
        }
        else if (this._engine?.window.keyLogger.get("KeyD") === "keydown") {
            this._walkAnimationTimer += elapsedTime;
            if (this._walkAnimationTimer <= 200)
                this._texture = this._textures[7];
            else if (this._walkAnimationTimer <= 400)
                this._texture = this._textures[6];
            else if (this._walkAnimationTimer <= 800)
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
        if (this._engine?.window.keyLogger.get("KeyS") === "keydown")
            this._isCollide = false;

        if (this._engine?.window.keyLogger.get("MouseButton") === "mousedown" && !this._isGunFired) {
            if (this._faceLeft)
                if (this._isJumping)
                    this._world?.addWorldObject(new Bullet({x: this._transform.x - 40, y: this._transform.y + 130}, true));
                else this._world?.addWorldObject(new Bullet({x: this._transform.x - 60, y: this._transform.y + 80}, true));
            else if (this._isJumping)
                this._world?.addWorldObject(new Bullet({x: this._transform.x + 290, y: this._transform.y + 120}));
            else this._world?.addWorldObject(new Bullet({x: this._transform.x + 310, y: this._transform.y + 80}));
            this._isGunFired = true;
        }

        if (this._engine?.window.keyLogger.get("Space") === "keydown" && !this._isJumping) {
            this._fallingVelocity  = -3;
            this._isJumping = true;
            this._isCollide = false;
        }

        let transformY = this._transform.y + this._fallingVelocity * elapsedTime;
        if (transformY <= 2160 - this._texture.size.y && !this._isCollide) {
            this._fallingVelocity += 0.007 * elapsedTime;
            this._isJumping = true;
        }
        else {
            this._fallingVelocity  = 0;
            this._isJumping = false;
            transformY = this._transform.y;
        }

        this._transform.y = transformY;
        this._isCollide = false;

        return true;
    }
}

export default Player;
