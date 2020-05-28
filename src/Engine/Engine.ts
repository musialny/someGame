import Window from "./Window";
import World from "./World";
import {Vector2D} from "./Containers";
import WorldObject from "./WorldObject";

class Engine {
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
        const gameLoop = () => {
            if (!this._isSetupStarted) {
                this._worlds[this._activeWorld].setup();
                this._isSetupStarted = true;
            }
            const t0 = performance.now();
            const result = this._worlds[this._activeWorld].update(elapsedTime);
            this.renderFrame(this._worlds[this._activeWorld].cameraPosition, this._worlds[this._activeWorld].worldObjects);
            const t1 = performance.now();
            elapsedTime = t1 - t0;
            if (result) {
                this._isLoopStarted = true;
                requestAnimationFrame(gameLoop);
            } else this._isLoopStarted = false;

        };
        if (!this._isLoopStarted)
            requestAnimationFrame(gameLoop);
    }

    private renderFrame(cameraPosition: Vector2D<number>, worldObjects: Map<string, WorldObject>) {
        this._window.context?.clearRect(0, 0, this._window.contextSize.x, this._window.contextSize.y);
        for (let [key, value] of worldObjects)
            value.texture.draw(<CanvasRenderingContext2D> this._window.context, value.transform);
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
