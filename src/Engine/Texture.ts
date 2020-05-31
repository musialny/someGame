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

    public abstract draw(context: CanvasRenderingContext2D, pos: Vector2D<number>, size: Vector2D<number>): void;

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

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>, size: Vector2D<number>) {}

    public drawAbsolute(context: CanvasRenderingContext2D, pos: Vector2D<number>) {}
}

class RectanglePrimitive extends Texture {
    public color: string;
    constructor(size: Vector2D<number>, zIndex: number, color: string) {
        super(size, zIndex);
        this.color = color;
    }

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>, size: Vector2D<number>): void {
        context.fillStyle = this.color;
        context.fillRect(pos.x, pos.y, size.x, size.y);
    }

    public drawAbsolute(context: CanvasRenderingContext2D, pos: Vector2D<number>) {}

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

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>, size: Vector2D<number>) {}

    public drawAbsolute(context: CanvasRenderingContext2D, pos: Vector2D<number>) {
        context.fillStyle = this.color;
        context.font = this.font;
        context.fillText(this.text, pos.x, pos.y);
    }
}

class ImageTexture extends Texture {
    private readonly _image: HTMLImageElement;
    private _placeholder: RectanglePrimitive;
    private _isImageLoaded: boolean;
    constructor(size: Vector2D<number>, zIndex: number, url: string, placeholderColor: string = "#e600ff") {
        super(size, zIndex);
        this._placeholder = new RectanglePrimitive(size, zIndex, placeholderColor);
        this._isImageLoaded = false;
        this._image = new Image();
        this._image.src = url;
        this._image.addEventListener("load", () => {
            this._isImageLoaded = true;
        });
    }

    public draw(context: CanvasRenderingContext2D, pos: Vector2D<number>, size: Vector2D<number>) {
        if (this._isImageLoaded)
            context.drawImage(this._image, pos.x, pos.y, size.x, size.y);
        else this._placeholder.draw(context, pos, size);
    }

    public drawAbsolute(context: CanvasRenderingContext2D, pos: Vector2D<number>) {}

}

export default Texture;
export {EmptyPrimitive, RectanglePrimitive, TextHUDPrimitive, ImageTexture};
