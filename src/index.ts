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
import {
    backgroundImage,
    playerDeadLeft,
    playerDeadRight,
    playerGunLeft,
    playerGunRight,
    playerJumpArmoredLeft,
    playerJumpArmoredRight,
    playerJumpLeft,
    playerJumpRight,
    playerStandLeft,
    playerStandRight, playerWalking1Left,
    playerWalking1Right, playerWalking2Left,
    playerWalking2Right
} from "./Assets";

window.onload = function () {
    try {
        new Engine(new Window(<HTMLCanvasElement> document.getElementById("canvas"), "#070c19"), [
            new World([
                new Player({x: 1300, y: 800}, [
                    playerStandLeft, playerStandRight, playerJumpLeft, playerJumpRight,
                    playerWalking1Left, playerWalking2Left, playerWalking1Right, playerWalking2Right,
                    playerGunLeft, playerGunRight, playerJumpArmoredLeft, playerJumpArmoredRight,
                    playerDeadLeft, playerDeadRight
                ]),
                new Background({x: 0, y: 0}, backgroundImage),
                new Box({x: 1800, y: 900}, 100),
                new Box({x: 1600, y: 950}, 100),
                new FPSHUDCounter({x: 3, y: 20})
            ])]);
    } catch (err) {
        console.log(`{Error -> ${err.message}}`);
    }
}
