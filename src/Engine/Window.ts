interface Vector2D {
    x: number,
    y: number
}

class Window {
    private readonly canvas: HTMLCanvasElement;
    private readonly context2D: CanvasRenderingContext2D | null;
    private _mousePosition: Vector2D

    constructor(canvas: HTMLCanvasElement, backgroundColor: string = "black") {
        console.log("Debug");
        if (canvas === null)
            throw Error("[Canvas not recognized]");
        else this.canvas = canvas;
        this.canvas.style.backgroundColor = backgroundColor;
        this.context2D = this.canvas.getContext("2d");
        if (this.context2D === null)
            throw Error("[Can not create 2D Canvas Context]");

        this._mousePosition = {x: 0, y: 0};
        const getMousePositionEvent = (event: MouseEvent) => this._mousePosition = {x: event.pageX, y: event.pageY};
        this.canvas.addEventListener("mousemove", getMousePositionEvent, false);
        this.canvas.addEventListener("mouseenter", getMousePositionEvent, false);
        this.canvas.addEventListener("mouseleave", getMousePositionEvent, false);

        const resizeCanvas = () => {
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const windowLoop = () => {
            console.log(`X: ${this.mousePosition.x} Y: ${this.mousePosition.y}`)
            requestAnimationFrame(windowLoop);
        }
        requestAnimationFrame(windowLoop);
    }

    get mousePosition() {
        return this._mousePosition;
    }

    get contextSize() {
        return <Vector2D> {x: this.canvas.width, y: this.canvas.height};
    }

    get context() {
        return this.context2D;
    }
}

export default Window;