const canvas = document.querySelector("#game");
const game = canvas.getContext ("2d");

let canvasSize;
let elementsSize;

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize () {

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute ("width", canvasSize);
    canvas.setAttribute ("height", canvasSize);
    elementsSize = (canvasSize / 10) -1;

    startGame();
}

function startGame () {

    console.log ({canvasSize, elementsSize});

    game.font = elementsSize + "px Verdana";
    game.textAlign = "";

    for (let i=0; i <= 10; i++) {
        for (let z = 1 ; z < 11; z++) {
            game.fillText(emojis["X"], elementsSize * i, elementsSize * z)
        }
    }

    // window.innerHeight
    // window.innerWidth

    // game.fillRect(0,50,100,100); // De que punto partirá el cuadrado y cuanto medirá (x=0, y=0, tamaño x=100, y=100)
    // game.clearRect (50,50,50,50); // Sirve para borrar el rectángulo.
    // game.clearRect ()

    // game.font = "25px Verdana";
    // game.fillStyle = "purple";
    // game.textAlign = "center"; // inicia o termina el texto en la acción aplicada si aplicas "End" terminará en el fillText indicado (25,25).
    // game.fillText("Platzi", 25,25);
}