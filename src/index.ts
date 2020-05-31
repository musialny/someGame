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
import Background from "./GameLogic/Background";
import {ImageTexture} from "./Engine/Texture";

// Assets
// @ts-ignore
import backgroundAssetImage from "./Resources/background.png";

window.onload = function () {
    try {
        const backgroundImage = new ImageTexture({x: 1920, y: 2160}, 0, backgroundAssetImage);
        new Engine(new Window(<HTMLCanvasElement> document.getElementById("canvas"), "#070c19"), [
            new World([
                new Player({x: 300, y: 800}),
                new Background({x: 0, y: 0}, backgroundImage),
                new Box({x: 150, y: 150}, 60, "Player"),
                new Box({x: 2800, y: 900}, 100),
                new Box({x: 2600, y: 950}, 100),
                new FPSHUDCounter({x: 3, y: 20})
            ])]);
    } catch (err) {
        console.log(`{Error -> ${err.message}}`);
    }
}
