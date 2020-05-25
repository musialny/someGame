import Window from "./Engine/Window";
import Engine from "./Engine/Engine";
import World from "./Engine/World";

window.onload = function () {
    new Engine(new Window(<HTMLCanvasElement> document.getElementById("canvas")), [new World()]);
}
