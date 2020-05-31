/*
 * When I wrote this, only God and I understood what I was doing
 * Now, God only knows
 *
 * Created by musialny.dev
 */

import {Vector2D} from "./Containers";

abstract class Texture {
    private _zIndex: number;

    public size: Vector2D<number>;

    protected constructor(size: Vector2D<number>, zIndex: number) {
        this.size = size;
        if (zIndex > 10 || zIndex < 0) throw Error("[zIndex property must have a value between 0 and 10]");
        this._zIndex = zIndex;
    }

    public abstract draw(context: CanvasRenderingContext2D, pos: Vector2D<number>): void;

    public abstract drawAbsolute(context: CanvasRenderingContext2D, pos: Vector2D<number>): void;

    get zIndex(): number {
        return this._zIndex;
    }

    set zIndex(zIndex: number) {
        if (zIndex > 10 || zIndex < 0) throw Error("[zIndex property must have a value between 0 and 10]");
        this._zIndex = zIndex;
    }

}

class EmptyPrimitive extends Texture {
    constructor() {
        super({x: 0, y: 0}, 0);
    }

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>) {}

    drawAbsolute(context: CanvasRenderingContext2D, pos: Vector2D<number>) {}
}

class RectanglePrimitive extends Texture {
    public color: string;
    constructor(size: Vector2D<number>, zIndex: number, color: string) {
        super(size, zIndex);
        this.color = color;
    }

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>): void {
        context.fillStyle = this.color;
        context.fillRect(pos.x, pos.y, this.size.x, this.size.y);
    }

    drawAbsolute(context: CanvasRenderingContext2D, pos: Vector2D<number>) {}

}

class TextHUDPrimitive extends Texture {
    public text: string;
    public color: string;
    public font: string;
    constructor(text: string, font: string, color: string, zIndex: number = 10) {
        super({x: 0, y: 0}, zIndex);
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
export {EmptyPrimitive, RectanglePrimitive, TextHUDPrimitive};
