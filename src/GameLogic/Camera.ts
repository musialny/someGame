import WorldObject from "../Engine/WorldObject";
import {Vector2D} from "../Engine/Containers";
import {EmptyPrimitive} from "../Engine/Texture";

class Camera extends WorldObject {
    constructor(transform: Vector2D<number>, parent: string = "Player") {
        super("Camera", transform, new EmptyPrimitive(), parent);
    }

    public setup() {}

    public update(elapsedTime: DOMHighResTimeStamp): boolean {
        if(this.absoluteTransform.x < 0) {
            if (!(this.absoluteTransform.y < 0 || this.absoluteTransform.y > 1080)) {
                // @ts-ignore
                this._world?.cameraPosition.y = this.absoluteTransform.y;
            }
        } else if (this.absoluteTransform.y < 0 || this.absoluteTransform.y > 1080) {
            // @ts-ignore
            this._world?.cameraPosition.x = this.absoluteTransform.x;
        }
        else {
            // @ts-ignore
            this._world?.cameraPosition = this.absoluteTransform;
        }

        return true;
    }
}

export default Camera;
