import Window from "./Engine/Window";
import Engine from "./Engine/Engine";
import World from "./Engine/World";
import WorldObject from "./Engine/WorldObject";
import {Vector2D} from "./Engine/Containers";
import {EmptyPrimitive, RectanglePrimitive} from "./Engine/Texture";

class Log extends WorldObject {
    constructor(id: string, transform: Vector2D<number>) {
        super(id, transform, new EmptyPrimitive());
    }

    public setup() {
        console.log("Log setup() was called.");
    }

    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        // console.log(`Mouse Position is: X: ${this._engine?.window.mousePosition.x} Y: ${this._engine?.window.mousePosition.y}`);
        console.log("Log");
        this._world?.addWorldObject(new Log1("Log1", {x: 0, y: 0}));
        (<Log1> this._world?.getWorldObject("Log1")).someValue = 10;
        console.log("Removing \"Log\" object.");
        this._world?.removeWorldObject("Log");
        return true;
    }
}

class Log1 extends WorldObject {
    public someValue: number;

    constructor(id: string, transform: Vector2D<number>) {
        super(id, transform, new RectanglePrimitive({x: 120, y: 120}, "#ff0000"));
        this.someValue = 0;
    }

    public setup() {
        this.someValue++;
        console.log("Log 1 setup() was called " + this.someValue + " times.");
    }

    private timer = 0;
    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        this.timer += elapsedTime;
        if (this.timer >= 1) {
            this.timer = 0;
            this.transform.x += 1;
            this.transform.y += 0.4;
        }

        return true;
    }
}

window.onload = function () {
    try {
        new Engine(new Window(<HTMLCanvasElement> document.getElementById("canvas")), [new World([new Log("Log", {x: 0, y: 0})])]);
    } catch (err) {
        console.log(`{Error -> ${err.message}}`);
    }
}
