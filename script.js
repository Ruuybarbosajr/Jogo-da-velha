const combinacoes = [
  [0, 1, 2], // linha 1
  [3, 4, 5], // linha 2
  [6, 7, 8], // linha 3
  [0, 3, 6], // coluna 1
  [1, 4, 7], // coluna 2
  [2, 5, 8], // coluna 3
  [0, 4, 8], // diagonal esqueda direita
  [2, 4, 6], // diagonal direita esquerda
];
function createDivs() {
  let grid = document.querySelector('.grid');
  for (let index = 0; index <= 8; index += 1) {
    let newDiv = document.createElement('div');
    newDiv.className = 'celula';
    newDiv.id = index;
    grid.appendChild(newDiv);
  }
}
createDivs();
let playerX = [];
let playerO = [];
let h2 = document.querySelector('#player');
let turn = 0;
let div = document.getElementsByClassName('celula');
let cont = true;
function jogar() {
  for (let index of div) {
    index.addEventListener('click', () => {
      if (index.innerText !== 'X' && index.innerText !== 'O' && cont) {
        console.log(matchs);
        if (turn % 2 === 0) {
          index.innerText = 'X';
          h2.innerText = 'Vez do jogador O';
          playerX.push(index.id);
        } else {
          index.innerText = 'O';
          h2.innerText = 'Vez do jogador X';
          playerO.push(index.id);
        }
        turn++;
        if (turn === 9) {
          h2.innerText = 'EMPATE';
        }
        winnerCheck(playerX, h2, 'X');
        winnerCheck(playerO, h2, 'O');
      }
    });
  }
}
jogar();

let matchs = 0;
function winnerCheck(player, subtitle, char) {
  for (let index of combinacoes) {
    for (let secondIdex of index) {
      for (let thirdIndex of player) {
        if (thirdIndex == secondIdex) {
          matchs++;
        }
      }
    }
    if (matchs === 3) {
      subtitle.innerText = `Jogador ${char} ganhou`;
      cont = false;
    }
    matchs = 0;
  }
}

function resetButton() {
  let btnReset = document.querySelector('#reset');
  let celula = document.querySelectorAll('.celula');
  btnReset.addEventListener('click', () => {
    for (let index of celula) {
      index.innerText = '';
      playerX = [];
      playerO = [];
      h2.innerText = 'Vez do jogador X';
      turn = 0;
      cont = true;
    }
  });
}
resetButton();
