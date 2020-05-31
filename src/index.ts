/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

// Engine
import Window from "./Engine/Window";
import Engine from "./Engine/Engine";
import World from "./Engine/World";
import Player from "./GameLogic/Player";

// Game Logic
import Box from "./GameLogic/Box";
import FPSHUDCounter from "./GameLogic/FPSHUDCounter";

/*
 *
 * TODO Create image loader and renderer
 *
 */

window.onload = function () {
    try {
        new Engine(new Window(<HTMLCanvasElement> document.getElementById("canvas")), [
            new World([
                new Player({x: 150, y: 200}),
                new Box({x: 200, y: 500}, 50),
                new Box({x: 150, y: 150}, 60, "Player"),
                new Box({x: 450, y: 650}, 50),
                new Box({x: 600, y: 600}, 50),
                new Box({x: 800, y: 600}, 500),
                new FPSHUDCounter({x: 3, y: 20})
            ])]);
    } catch (err) {
        console.log(`{Error -> ${err.message}}`);
    }
}
