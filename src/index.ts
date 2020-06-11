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
import DebugData from "./GameLogic/DebugData";
import Background from "./GameLogic/Background";
import Generator from "./GameLogic/Generator";

window.onload = function () {
    try {
        new Engine(new Window(<HTMLCanvasElement> document.getElementById("canvas"), "#070c19"), [
            new World([
                new Player({x: 0, y: 630}),
                new Background({x: 0, y: 0}),
                new DebugData({x: 10, y: 10}),
                new Generator({x: 0, y: 0})
            ])]);
    } catch (err) {
        console.log(`{Error -> ${err.message}}`);
    }
}
