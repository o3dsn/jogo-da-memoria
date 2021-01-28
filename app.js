const board = document.querySelector(".table__board");


// Jogo da Memoria ( )

// pares : [[1, 1], [2,2] ... [8, 8]]; ( x )

// escolher 2 cartas e verificar se elas são iguais ( )

// Se for igual, vai somar pontos ( )

// Se não for igual, não tem soma de pontos ( )


let pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

let selectedCards = [];

pairs.forEach(pair => {
    const card = document.createElement("div");

    card.className = "table__board__card";
    card.dataset.value = pair;
    card.innerText = pair;

    card.addEventListener("click", itIsAMatch);
    
    board.append(card);
});



function itIsAMatch(value) {
    const clickedCard = value.target;

    if(clickedCard.classList.contains('open')) {
        return;
    }

    clickedCard.classList.add('open');

    selectedCards.push(clickedCard);

    if(selectedCards.length > 1) {
        const [firstCard, secondCard] = [...selectedCards];

        if(firstCard.dataset.value === secondCard.dataset.value) {
            console.log("Formou par")

            selectedCards = [];
        } else {
           
            selectedCards = [];

            setTimeout(() => {
                firstCard.classList.remove('open');
                secondCard.classList.remove('open');
            }, 800);

            // milisegundos 1000ms = 1s
        }
    }

    
}