const bigSquare = document.getElementById("big-square");
const smallSquare1 = document.getElementById("small-square1");
const smallSquare2 = document.getElementById("small-square2");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

let animationInterval; // Reference to the animation interval

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

function moveSquares() {
    const bigSquareWidth = bigSquare.clientWidth - smallSquare1.clientWidth;
    const bigSquareHeight = bigSquare.clientHeight - smallSquare1.clientHeight;

    // Generate random positions within the boundaries of the big square
    const newTop1 = getRandomPosition(bigSquareHeight);
    const newLeft1 = getRandomPosition(bigSquareWidth);
    const newTop2 = getRandomPosition(bigSquareHeight);
    const newLeft2 = getRandomPosition(bigSquareWidth);

    // Update positions of the small squares
    smallSquare1.style.top = `${newTop1}px`;
    smallSquare1.style.left = `${newLeft1}px`;
    smallSquare2.style.top = `${newTop2}px`;
    smallSquare2.style.left = `${newLeft2}px`;
}

function startAnimation() {
    // Start animation by repeatedly calling moveSquares at a specific interval
    animationInterval = setInterval(moveSquares, 500); // Adjust interval for animation speed (50 milliseconds here)
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopAnimation() {
    clearInterval(animationInterval); // Clear the animation interval to stop movement
    startButton.disabled = false;
    stopButton.disabled = true;
}

startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);