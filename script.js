
let xWin = 0;
let yWin = 0;

function clicked(x) {
    let compRand = Math.floor(Math.random() * 3);
    let y;
    if (compRand == 0) {
        y = '🪨';
    } else if (compRand == 1) {
        y = '📄';
    } else {
        y = '✂️';
    }
    if (x == y) {
        document.querySelector('.round_text h2').textContent = 'TIE';
    } else if (x === '🪨' && y === '✂️' || x === '📄' && y === '🪨' || x === '✂️' && y === '📄') {
        document.querySelector('.round_text h2').textContent = 'USER WINS';
        xWin++;
    } else {
        document.querySelector('.round_text h2').textContent = 'COMPUTER WINS';
        yWin++;
    }

    document.querySelector('.round_text h1').textContent = x + ' versus ' + y;
    document.querySelector('.round_text h3').textContent = 'SCORE: ' + xWin + ' - ' + yWin;

}