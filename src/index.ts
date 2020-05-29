import Window from "./Engine/Window";
import Engine from "./Engine/Engine";
import World from "./Engine/World";
import Player from "./GameLogic/Player";
import WorldObject from "./Engine/WorldObject";
import {Vector2D} from "./Engine/Containers";
import {RectanglePrimitive, TextHUDPrimitive} from "./Engine/Texture";

/*
*
* TODO Create Z Index
* TODO Create Objects Child <-> Parent relation system
* TODO Create constant FoV
* TODO Create image loader and renderer
*
 */

class Box extends WorldObject {
    private static _id: number = 0;
    constructor(transform: Vector2D<number>, size: number) {
        super("Box" + Box._id, transform, new RectanglePrimitive({x: size, y: size}, "#059846"));
        Box._id++;
    }

    setup() {
        console.log(this.id);
    }

    update(elapsedTime: DOMHighResTimeStamp): boolean {
        return true;
    }
}

class FPSHUDCounter extends WorldObject {
    constructor(transform: Vector2D<number>) {
        super("FPSHUDCounter", transform, new TextHUDPrimitive("OwO", "24px serif", "#8300bc"));
    }

    setup() {}

    update(elapsedTime: DOMHighResTimeStamp): boolean {
        (<TextHUDPrimitive> this._texture).text = "FPS: " + (1000 / elapsedTime).toPrecision(3).toString();
        return true;
    }
}

window.onload = function () {
    try {
        new Engine(new Window(<HTMLCanvasElement> document.getElementById("canvas")), [
            new World([
                new Player({x: 150, y: 200}),
                new Box({x: 200, y: 500}, 50),
                new Box({x: 300, y: 550}, 60),
                new Box({x: 450, y: 650}, 50),
                new Box({x: 600, y: 600}, 50),
                new Box({x: 800, y: 600}, 500),
                new FPSHUDCounter({x: 3, y: 20})
            ])]);
    } catch (err) {
        console.log(`{Error -> ${err.message}}`);
    }
}
