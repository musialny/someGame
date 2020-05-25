window.onload = function () {
    const canvas = <HTMLCanvasElement> document.getElementById("canvas");
    const context = <CanvasRenderingContext2D> canvas.getContext("2d");

    const coords = <HTMLHeadElement> document.getElementById("coords");
    const resizeCanvas = () => {
        canvas.width = document.body.clientWidth;
        canvas.height = window.innerHeight - 100;
    }

    resizeCanvas();

    const drawCoords = (event: MouseEvent) => coords.innerText = `X: ${event.pageX.toString()} Y: ${event.pageY.toString()}`;

    window.addEventListener("resize", resizeCanvas);

    canvas.addEventListener("mousemove", drawCoords, false);
    canvas.addEventListener("mouseenter", drawCoords, false);
    canvas.addEventListener("mouseleave", drawCoords, false);
    
}
