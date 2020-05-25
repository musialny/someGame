import Window from "./Window";
import World from "./World";

class Engine {
    private readonly _window: Window;
    private _worlds: World[];
    private _activeWorld: number;

    constructor(window: Window, worlds: World[], activeWorld:number = 0) {
        this._window = window;
        this._worlds = worlds;
        // this._activeWorld = 0;
        // this.bindWorld(activeWorld);

        if (this._worlds.length > 0 && activeWorld >= 0 && activeWorld < this._worlds.length)
            this._activeWorld = activeWorld;
        else throw Error(`[${activeWorld} is not registered world]`);

        let elapsedTime = 0;
        const gameLoop = () => {
            const t0 = performance.now();
            this._worlds[this._activeWorld].update(elapsedTime);
            const t1 = performance.now();
            elapsedTime = t1 - t0;
            requestAnimationFrame(gameLoop);
        };

        this._worlds[this._activeWorld].setup();
        requestAnimationFrame(gameLoop);

    }

    /*bindWorld(val: number) {
        if (this._worlds.length > 0 && val >= 0 && val < this._worlds.length)
            this._activeWorld = val;
        else throw Error(`[${val} is not registered world]`);

        let elapsedTime = 0;
        const gameLoop = () => {
            const t0 = performance.now();
            this._worlds[this._activeWorld].update(elapsedTime);
            const t1 = performance.now();
            elapsedTime = t1 - t0;
            requestAnimationFrame(gameLoop);
        };

        this._worlds[this._activeWorld].setup();
        requestAnimationFrame(gameLoop);

    }*/

    get activeWorld() {
        return this._activeWorld;
    }
}

export default Engine;
