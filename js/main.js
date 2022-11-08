const board = document.querySelector('#board');
const SQUARES_NUM = 400;
for (let i = 0; i < SQUARES_NUM; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
}

const setColor = (el) => {
    let rgbColors = [];
    for (let i = 0; i < 3; i++) {
        rgbColors.push(Math.floor(Math.random() * 255));
    }
    let parsedColor = 'rgb('+ rgbColors.join(',')+')';
    el.style.boxShadow = `0 0 2px ${parsedColor}, 0 0 10px ${parsedColor}`
    el.style.backgroundColor = parsedColor
}

const removeColor = (el) => {
    el.style.backgroundColor = null;
    el.style.boxShadow = '0 0 2px #000'
}