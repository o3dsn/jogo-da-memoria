const board = document.querySelector(".table__board");


// Jogo da Memoria ( )

// pares : [[1, 1], [2,2] ... [8, 8]]; ( x )

// escolher 2 cartas e verificar se elas são iguais ( )

// Se for igual, vai somar pontos ( )

// Se não for igual, não tem soma de pontos ( )


let pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

pairs.forEach(pair => {
    const card = document.createElement("div");

    card.className = "table__board__card";
    card.innerText = pair;

    card.addEventListener("click", itIsAMatch);
    
    board.append(card);
});

let value1
let value2

function itIsAMatch(value) {
    console.log(value.target)
}