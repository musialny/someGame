import {Vector2D} from "./Containers";

abstract class Texture {
    public size: Vector2D<number>;
    protected constructor(size: Vector2D<number>) {
        this.size = size;
    }

    public abstract draw(context: CanvasRenderingContext2D, pos: Vector2D<number>): void;
}

class EmptyPrimitive extends Texture {
    constructor() {
        super({x: 0, y: 0});
    }

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>) {}
}

class RectanglePrimitive extends Texture{
    public _color: string;
    constructor(size: Vector2D<number>, color: string) {
        super(size);
        this._color = color;
    }

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>): void {
        context.fillStyle = this._color;
        context.fillRect(pos.x, pos.y, this.size.x, this.size.y);
    }

}

export default Texture;
export {Texture, EmptyPrimitive, RectanglePrimitive};
