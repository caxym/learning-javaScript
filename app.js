let jugadorA = prompt("Jugador A");
let jugadorB = prompt("Jugador B");
let pointsA = null;
let pointsB = null;


if (jugadorA == "piedra" && jugadorB == "tijeras") {
    console.log("piedra gana a tijeras, Jugador: " + jugadorA);
    pointsA= pointsA++;
} else if (jugadorA == "piedra" && jugadorB == "papel") {
    console.log("Papel gana a piedra, gana jugador: " + jugadorB);
    pointsB= pointsB++;
} else if (jugadorA == "tijeras" && jugadorB == "piedra") {
    console.log("Piedra gana tijera, gana jugador: " + jugadorB);
    pointsB= pointsB++;
}else if (jugadorA == "papel" && jugadorB == "piedra") {
    console.log("Papel gana a piedra, gana jugador: " + jugadorA);
    pointsA= pointsA++;
}else if (jugadorA == "tijeras" && jugadorB == "papel") {
    console.log("tijeras gana a papel, gana jugador: " + jugadorA);
    pointsA= pointsA++;
}else if (jugadorA == "papel" && jugadorB == "tijeras") {
    console.log("tijeras gana a papel, gana jugador: " + jugadorB);
    pointsB= pointsB++;
}else if (jugadorA == jugadorB) {
    console.log("Empate");
}
console.log(pointsA);
console.log(pointsB);