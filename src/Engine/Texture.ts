import {Vector2D} from "./Containers";

abstract class Texture {
    public size: Vector2D<number>;
    protected constructor(size: Vector2D<number>) {
        this.size = size;
    }

    public abstract draw(context: CanvasRenderingContext2D, pos: Vector2D<number>): void;

    public abstract drawAbsolute(context: CanvasRenderingContext2D, pos: Vector2D<number>): void;
}

class EmptyPrimitive extends Texture {
    constructor() {
        super({x: 0, y: 0});
    }

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>) {}

    drawAbsolute(context: CanvasRenderingContext2D, pos: Vector2D<number>) {}
}

class RectanglePrimitive extends Texture{
    public color: string;
    constructor(size: Vector2D<number>, color: string) {
        super(size);
        this.color = color;
    }

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>): void {
        context.fillStyle = this.color;
        context.fillRect(pos.x, pos.y, this.size.x, this.size.y);
    }

    drawAbsolute(context: CanvasRenderingContext2D, pos: Vector2D<number>) {}

}

class TextHUDPrimitive extends Texture{
    public text: string;
    public color: string;
    public font: string;
    constructor(text: string, font: string, color: string) {
        super({x: 0, y: 0});
        this.text = text;
        this.color = color;
        this.font = font;
    }

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>) {}

    drawAbsolute(context: CanvasRenderingContext2D, pos: Vector2D<number>) {
        context.fillStyle = this.color;
        context.font = this.font;
        context.fillText(this.text, pos.x, pos.y);
    }
}

export default Texture;
export {Texture, EmptyPrimitive, RectanglePrimitive, TextHUDPrimitive};
