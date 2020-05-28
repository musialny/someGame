import {Vector2D} from "./Containers";

abstract class Texture {
    public size: Vector2D<number>;
    protected constructor(size: Vector2D<number>) {
        this.size = size;
    }

    public abstract draw(context: CanvasRenderingContext2D, pos: Vector2D<number>): void;
}

class RectanglePrimitive extends Texture{
    public _color: string;
    constructor(size: Vector2D<number>, color: string) {
        super(size);
        this._color = color;
    }

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>) {
        
    }

}

export default Texture;
export {Texture, RectanglePrimitive};
