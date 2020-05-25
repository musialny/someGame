import Window from "./Engine/Window";
import Engine from "./Engine/Engine";
import World from "./Engine/World";

window.onload = function () {
    try {
        new Engine(new Window(<HTMLCanvasElement>document.getElementById("canvas")), [new World()]);
    } catch (err) {
        console.log(`{Error -> ${err.message}}`);
    }
}
