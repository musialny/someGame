import Window from "./Engine/Window";
import Engine from "./Engine/Engine";
import World from "./Engine/World";
import Player from "./GameLogic/Player";
import WorldObject from "./Engine/WorldObject";
import {Vector2D} from "./Engine/Containers";
import {RectanglePrimitive} from "./Engine/Texture";

/*
*
* TODO Create Z Index
* TODO Create Objects Child <-> Parent relation system
* TODO Create constant FoV
*
 */

class Box extends WorldObject {
    constructor(id: number, transform: Vector2D<number>, size: number) {
        super("Box" + id, transform, new RectanglePrimitive({x: size, y: size}, "#059846"));
    }

    setup() {

    }

    update(elapsedTime: DOMHighResTimeStamp): boolean {
        return true;
    }
}

window.onload = function () {
    try {
        new Engine(new Window(<HTMLCanvasElement> document.getElementById("canvas")), [
            new World([
                new Player({x: 150, y: 200}),
                new Box(0, {x: 200, y: 500}, 50),
                new Box(1, {x: 300, y: 550}, 60),
                new Box(2, {x: 450, y: 650}, 50),
                new Box(3, {x: 600, y: 600}, 50),
            ])]);
    } catch (err) {
        console.log(`{Error -> ${err.message}}`);
    }
}
