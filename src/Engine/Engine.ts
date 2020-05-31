/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import Window from "./Window";
import World from "./World";
import {Vector2D} from "./Containers";
import WorldObject from "./WorldObject";

class Engine {
    public fov: Vector2D<number>;
    private readonly _window: Window;
    private _worlds: World[];
    private _activeWorld: number;
    private _isLoopStarted: boolean;
    private _isSetupStarted: boolean;

    constructor(window: Window, worlds: World[], activeWorld:number = 0) {
        this._window = window;
        this._worlds = worlds;
        this._activeWorld = 0;
        this._isLoopStarted = false;
        this._isSetupStarted = false;
        this.fov = {x: 1920, y: 1080};
        for (let i = 0; i < this._worlds.length; i++)
            this._worlds[i].bindEngineInstance(this);

        this.bindWorld(activeWorld);
    }

    public bindWorld(val: number) {
        if (this._worlds.length > 0 && val >= 0 && val < this._worlds.length)
            this._activeWorld = val;
        else throw Error(`[${val} is not registered world]`);

        this._isSetupStarted = false;

        let elapsedTime = 0;
        let deltaTime = 0;
        const gameLoop = () => {
            if (!this._isSetupStarted) {
                this._worlds[this._activeWorld].setup();
                this._isSetupStarted = true;
            }
            const result = this._worlds[this._activeWorld].update(elapsedTime);
            this.renderFrame(this._worlds[this._activeWorld].cameraPosition, this._worlds[this._activeWorld].worldObjects);
            if (result) {
                this._isLoopStarted = true;
                const timestamp = performance.now();
                elapsedTime = timestamp - deltaTime;
                deltaTime = timestamp;
                requestAnimationFrame(gameLoop);
            } else this._isLoopStarted = false;

        };
        if (!this._isLoopStarted)
            requestAnimationFrame(gameLoop);
    }

    private renderFrame(cameraPosition: Vector2D<number>, worldObjects: Map<string, WorldObject>) {
        this._window.context?.clearRect(0, 0, this._window.contextSize.x, this._window.contextSize.y);
        for (let zIndex = 0; zIndex <= 10; zIndex++) {
            for (let [key, value] of worldObjects) {
                if (value.texture.zIndex === zIndex) {
                    let transform: Vector2D<number> = {
                        x: value.absoluteTransform.x - cameraPosition.x,
                        y: value.absoluteTransform.y - cameraPosition.y
                    };
                    const transformProportions: Vector2D<number> = {
                        x: (this.fov.x - transform.x) / this.fov.x,
                        y: (this.fov.y - transform.y) / this.fov.y,
                    };
                    transform.x = this._window.contextSize.x - (this._window.contextSize.x * transformProportions.x);
                    transform.y = this._window.contextSize.y - (this._window.contextSize.y * transformProportions.y);

                    const sizeProportions: Vector2D<number> = {
                        x: value.texture.size.x / this.fov.x,
                        y: value.texture.size.y / this.fov.y
                    }
                    let size: Vector2D<number> = {
                        x: this._window.contextSize.x * sizeProportions.x,
                        y: this._window.contextSize.y * sizeProportions.y
                    }

                    if (transform.x + cameraPosition.x + size.x >= cameraPosition.x &&
                        transform.y + cameraPosition.y + size.y >= cameraPosition.y &&
                        transform.x <= this._window.contextSize.x && transform.y <= this._window.contextSize.y)
                        value.texture.draw(<CanvasRenderingContext2D>this._window.context, transform, size);
                    value.texture.drawAbsolute(<CanvasRenderingContext2D>this._window.context, value.transform);
                }
            }
        }
    }

    get isSetupStarted(): boolean {
        return this._isSetupStarted;
    }

    public get activeWorld(): number {
        return this._activeWorld;
    }

    public get window(): Window {
        return this._window;
    }
}

export default Engine;
