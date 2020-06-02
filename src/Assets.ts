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

//Blue NPC
// @ts-ignore
import NPCBlueWalking1LeftAssetImage from "./Resources/NPC/Blue/walk1_left.png";
// @ts-ignore
import NPCBlueWalking1RightAssetImage from "./Resources/NPC/Blue/walk1_right.png";
// @ts-ignore
import NPCBlueWalking2LeftAssetImage from "./Resources/NPC/Blue/walk2_left.png";
// @ts-ignore
import NPCBlueWalking2RightAssetImage from "./Resources/NPC/Blue/walk2_right.png";
// @ts-ignore
import NPCBlueDeadRightAssetImage from "./Resources/NPC/Blue/dead_right.png";
// @ts-ignore
import NPCBlueDeadLeftAssetImage from "./Resources/NPC/Blue/dead_left.png";
// @ts-ignore
import NPCBlueBite1RightAssetImage from "./Resources/NPC/Blue/bite1_right.png";
// @ts-ignore
import NPCBlueBite1LeftAssetImage from "./Resources/NPC/Blue/bite1_left.png";
// @ts-ignore
import NPCBlueBite2RightAssetImage from "./Resources/NPC/Blue/bite2_right.png";
// @ts-ignore
import NPCBlueBite2LeftAssetImage from "./Resources/NPC/Blue/bite2_left.png";

// Platform
// @ts-ignore
import platformAssetImage from "./Resources/platform.png";

// Bullet
// @ts-ignore
import bulletLeftAssetImage from "./Resources/Bullet/bullet_left.png";
// @ts-ignore
import bulletRightAssetImage from "./Resources/Bullet/bullet_right.png";

const backgroundImage = new ImageTexture({x: 1920, y: 2160}, 0, backgroundAssetImage),
    playerDeadLeft = new ImageTexture({x: 460, y: 300}, 3, playerDeadLeftAssetImage),
    playerDeadRight = new ImageTexture({x: 460, y: 300}, 3, playerDeadRightAssetImage),
    playerGunLeft = new ImageTexture({x: 320, y: 450}, 3, playerGunLeftAssetImage, {x: -91, y: 0}),
    playerGunRight = new ImageTexture({x: 320, y: 450}, 3, playerGunRightAssetImage, {x: 71, y: 0}),
    playerJumpArmoredLeft = new ImageTexture({x: 300, y: 450}, 3, playerJumpArmoredLeftAssetImage, {x: -46, y: 0}),
    playerJumpArmoredRight = new ImageTexture({x: 300, y: 450}, 3, playerJumpArmoredRightAssetImage, {x: 46, y: 0}),
    playerJumpLeft = new ImageTexture({x: 300, y: 450}, 3, playerJumpLeftAssetImage),
    playerJumpRight = new ImageTexture({x: 300, y: 450}, 3, playerJumpRightAssetImage),
    playerStandLeft = new ImageTexture({x: 300, y: 450}, 3, playerStandLeftAssetImage),
    playerStandRight = new ImageTexture({x: 300, y: 450}, 3, playerStandRightAssetImage),
    playerWalking1Left = new ImageTexture({x: 300, y: 450}, 3, playerWalking1LeftAssetImage),
    playerWalking1Right = new ImageTexture({x: 300, y: 450}, 3, playerWalking1RightAssetImage),
    playerWalking2Left = new ImageTexture({x: 300, y: 450}, 3, playerWalking2LeftAssetImage),
    playerWalking2Right = new ImageTexture({x: 300, y: 450}, 3, playerWalking2RightAssetImage),
    platformImage = new ImageTexture({x: 172, y: 108}, 1, platformAssetImage),
    bulletLeftImage = new ImageTexture({x: 50, y: 50}, 4, bulletLeftAssetImage),
    bulletRightImage = new ImageTexture({x: 50, y: 50}, 4, bulletRightAssetImage),
    NPCBlueWalking1Left = new ImageTexture({x: 300, y: 450}, 2, NPCBlueWalking1LeftAssetImage),
    NPCBlueWalking1Right = new ImageTexture({x: 300, y: 450}, 2, NPCBlueWalking1RightAssetImage),
    NPCBlueWalking2Left = new ImageTexture({x: 300, y: 450}, 2, NPCBlueWalking2LeftAssetImage, {x: -12, y: 0}),
    NPCBlueWalking2Right = new ImageTexture({x: 300, y: 450}, 2, NPCBlueWalking2RightAssetImage),
    NPCBlueDeadRight = new ImageTexture({x: 300, y: 108}, 2, NPCBlueDeadRightAssetImage),
    NPCBlueDeadLeft = new ImageTexture({x: 300, y: 108}, 2, NPCBlueDeadLeftAssetImage),
    NPCBlueBite1Right = new ImageTexture({x: 300, y: 450}, 2, NPCBlueBite1RightAssetImage),
    NPCBlueBite1Left = new ImageTexture({x: 300, y: 450}, 2, NPCBlueBite1LeftAssetImage),
    NPCBlueBite2Right = new ImageTexture({x: 300, y: 450}, 2, NPCBlueBite2RightAssetImage),
    NPCBlueBite2Left = new ImageTexture({x: 300, y: 450}, 2, NPCBlueBite2LeftAssetImage);

export {backgroundImage, playerDeadLeft, playerDeadRight, playerGunLeft, playerGunRight,
        playerJumpArmoredLeft, playerJumpArmoredRight, playerJumpLeft, playerJumpRight, playerStandLeft, playerStandRight,
        playerWalking1Left, playerWalking1Right, playerWalking2Left, playerWalking2Right, platformImage, bulletLeftImage,
        bulletRightImage, NPCBlueWalking1Left, NPCBlueWalking1Right, NPCBlueWalking2Left, NPCBlueWalking2Right,
        NPCBlueDeadRight, NPCBlueDeadLeft, NPCBlueBite1Right, NPCBlueBite1Left, NPCBlueBite2Right,
        NPCBlueBite2Left};
