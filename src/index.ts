import Window from "./Engine/Window";
import Engine from "./Engine/Engine";
import World from "./Engine/World";

// this is testing placeholder
class World2 extends World {
    constructor() {
        super();
    }

    public setup() {
        console.log("Setup in World2 was called");
    }

    private time2 = 0;
    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        this.time2 += elapsedTime;
        // console.log("Elapsed time in World2: " + elapsedTime);
        console.log("Timer in World2: " + this.time2);
        if (this.time2 >= 80) {
            this.time2 = 0;
            this._engine?.bindWorld(0);
        }
        return true;
    }

}

window.onload = function () {
    try {
        new Engine(new Window(<HTMLCanvasElement>document.getElementById("canvas")), [new World(), new World2()]);
    } catch (err) {
        console.log(`{Error -> ${err.message}}`);
    }
}
