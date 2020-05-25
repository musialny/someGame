import {Vector2D} from "./Containers";

class Window {
    private readonly _canvas: HTMLCanvasElement;
    private readonly _context2D: CanvasRenderingContext2D | null;
    private _mousePosition: Vector2D<number>

    constructor(canvas: HTMLCanvasElement, backgroundColor: string = "black") {
        if (canvas === null)
            throw Error("[Canvas not recognized]");
        else this._canvas = canvas;
        this._canvas.style.backgroundColor = backgroundColor;
        this._context2D = this._canvas.getContext("2d");
        if (this._context2D === null)
            throw Error("[Can not create 2D Canvas Context]");

        this._mousePosition = {x: 0, y: 0};
        const getMousePositionEvent = (event: MouseEvent) => this._mousePosition = {x: event.pageX, y: event.pageY < 0 ? 0 : event.pageY};
        this._canvas.addEventListener("mousemove", getMousePositionEvent, false);
        this._canvas.addEventListener("mouseenter", getMousePositionEvent, false);
        this._canvas.addEventListener("mouseleave", getMousePositionEvent, false);

        const resizeCanvas = () => {
            this._canvas.width = document.body.clientWidth;
            this._canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
    }

    get mousePosition() {
        return this._mousePosition;
    }

    get contextSize() {
        return <Vector2D<number>> {x: this._canvas.width, y: this._canvas.height};
    }

    get context() {
        return this._context2D;
    }
}

export default Window;