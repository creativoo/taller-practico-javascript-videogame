const canvas = document.querySelector("#game");
const game = canvas.getContext ("2d");

window.addEventListener("load", startGame);

function startGame () {
    // game.fillRect(0,50,100,100); // De que punto partirá el cuadrado y cuanto medirá (x=0, y=0, tamaño x=100, y=100)
    // game.clearRect (50,50,50,50); // Sirve para borrar el rectángulo.
    // game.clearRect ()

    game.font = "25px Verdana";
    game.fillStyle = "purple";
    game.textAlign = "center"; // inicia o termina el texto en la acción aplicada si aplicas "End" terminará en el fillText indicado (25,25).
    game.fillText("Platzi", 25,25);
}