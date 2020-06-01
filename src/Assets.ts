/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import {ImageTexture} from "./Engine/Texture";

// Main assets
// @ts-ignore
import backgroundAssetImage from "./Resources/background.png";

// Main character assets
// @ts-ignore
import playerDeadLeftAssetImage from "./Resources/Player/dead_left.png";
// @ts-ignore
import playerDeadRightAssetImage from "./Resources/Player/dead_right.png";
// @ts-ignore
import playerGunLeftAssetImage from "./Resources/Player/gun_left.png";
// @ts-ignore
import playerGunRightAssetImage from "./Resources/Player/gun_right.png";
// @ts-ignore
import playerJumpArmoredLeftAssetImage from "./Resources/Player/jump_armored_left.png";
// @ts-ignore
import playerJumpArmoredRightAssetImage from "./Resources/Player/jump_armored_right.png";
// @ts-ignore
import playerJumpLeftAssetImage from "./Resources/Player/jump_left.png";
// @ts-ignore
import playerJumpRightAssetImage from "./Resources/Player/jump_right.png";
// @ts-ignore
import playerStandLeftAssetImage from "./Resources/Player/stand_left.png";
// @ts-ignore
import playerStandRightAssetImage from "./Resources/Player/stand_right.png";
// @ts-ignore
import playerWalking1LeftAssetImage from "./Resources/Player/walking1_left.png";
// @ts-ignore
import playerWalking1RightAssetImage from "./Resources/Player/walking1_right.png";
// @ts-ignore
import playerWalking2LeftAssetImage from "./Resources/Player/walking2_left.png";
// @ts-ignore
import playerWalking2RightAssetImage from "./Resources/Player/walking2_right.png";

// Platform
// @ts-ignore
import platformAssetImage from "./Resources/platform.png";

// Bullet
// @ts-ignore
import bulletLeftAssetImage from "./Resources/Bullet/bullet_left.png";
// @ts-ignore
import bulletRightAssetImage from "./Resources/Bullet/bullet_right.png";

const backgroundImage = new ImageTexture({x: 1920, y: 2160}, 0, backgroundAssetImage),
    playerDeadLeft = new ImageTexture({x: 300, y: 450}, 2, playerDeadLeftAssetImage),
    playerDeadRight = new ImageTexture({x: 300, y: 450}, 2, playerDeadRightAssetImage),
    playerGunLeft = new ImageTexture({x: 300, y: 450}, 2, playerGunLeftAssetImage),
    playerGunRight = new ImageTexture({x: 300, y: 450}, 2, playerGunRightAssetImage),
    playerJumpArmoredLeft = new ImageTexture({x: 300, y: 450}, 2, playerJumpArmoredLeftAssetImage),
    playerJumpArmoredRight = new ImageTexture({x: 300, y: 450}, 2, playerJumpArmoredRightAssetImage),
    playerJumpLeft = new ImageTexture({x: 300, y: 450}, 2, playerJumpLeftAssetImage),
    playerJumpRight = new ImageTexture({x: 300, y: 450}, 2, playerJumpRightAssetImage),
    playerStandLeft = new ImageTexture({x: 300, y: 450}, 2, playerStandLeftAssetImage),
    playerStandRight = new ImageTexture({x: 300, y: 450}, 2, playerStandRightAssetImage),
    playerWalking1Left = new ImageTexture({x: 300, y: 450}, 2, playerWalking1LeftAssetImage),
    playerWalking1Right = new ImageTexture({x: 300, y: 450}, 2, playerWalking1RightAssetImage),
    playerWalking2Left = new ImageTexture({x: 300, y: 450}, 2, playerWalking2LeftAssetImage),
    playerWalking2Right = new ImageTexture({x: 300, y: 450}, 2, playerWalking2RightAssetImage),
    platformImage = new ImageTexture({x: 172, y: 108}, 1, platformAssetImage),
    bulletLeftImage = new ImageTexture({x: 50, y: 50}, 3, bulletLeftAssetImage),
    bulletRightImage = new ImageTexture({x: 50, y: 50}, 3, bulletRightAssetImage);

export {backgroundImage, playerDeadLeft, playerDeadRight, playerGunLeft, playerGunRight,
        playerJumpArmoredLeft, playerJumpArmoredRight, playerJumpLeft, playerJumpRight, playerStandLeft, playerStandRight,
        playerWalking1Left, playerWalking1Right, playerWalking2Left, playerWalking2Right, platformImage, bulletLeftImage, bulletRightImage};
