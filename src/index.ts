import Window from "./Engine/Window";
import Engine from "./Engine/Engine";
import World from "./Engine/World";
import Player from "./GameLogic/Player";

window.onload = function () {
    try {
        new Engine(new Window(<HTMLCanvasElement> document.getElementById("canvas")), [new World([new Player({x: 300, y: 300})])]);
    } catch (err) {
        console.log(`{Error -> ${err.message}}`);
    }
}
