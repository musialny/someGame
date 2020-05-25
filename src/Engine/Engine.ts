import Window from "./Window";
import World from "./World";

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

    get activeWorld() {
        return this._activeWorld;
    }
}

export default Engine;
