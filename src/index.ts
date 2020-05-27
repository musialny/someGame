import Window from "./Engine/Window";
import Engine from "./Engine/Engine";
import World from "./Engine/World";
import WorldObject from "./Engine/WorldObject";
import {Vector2D} from "./Engine/Containers";
import Texture from "./Engine/Texture";

class Log extends WorldObject {
    constructor(transform: Vector2D<number>, texture: Texture) {
        super(transform, texture);
    }

    setup() {
        console.log("[Log is initialized]");
    }

    update(elapsedTime: DOMHighResTimeStamp): boolean {
        console.log("[ Log is loggiiiiiiiiiiiiiiiiiiiiiiiiiiiiing........... ]");
        return true;
    }
}

window.onload = function () {
    try {
        new Engine(new Window(<HTMLCanvasElement> document.getElementById("canvas")), [new World([new Log({x: 0, y: 0}, new Texture())])]);
    } catch (err) {
        console.log(`{Error -> ${err.message}}`);
    }
}
