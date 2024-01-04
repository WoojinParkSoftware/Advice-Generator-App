const dice = document.querySelector(".dice-icon");
const adviceNum = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");

window.onload = showQuote;

dice.addEventListener("click", () => {
    showQuote();
});

// function showQuote() {
//     fetch("https://api.adviceslip.com/advice")
//         .then(response => response.json())
//         .then((data) => data.slip)
//         .then((data) => {
//             adviceNum.textContent = "Advice #" + data.id;
//             adviceText.textContent = `"${data.advice}"`;
//         })
//         .catch((error) => {
//             alert(`Error ${error}`);
//         });
// }

async function showQuote() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        const advice = data.slip;
        adviceNum.textContent = advice.id;
        adviceText.textContent = `"${advice.advice}"`;
    } catch (error) {
        alert(`Error ${error}`);
    }
}
