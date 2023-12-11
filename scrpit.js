const words = [["Your mind", "Intellect", "Knowledge", "Wisdom"], ["expands", "grows", "develops", "blossoms"], ["like a flourishing garden.",
"into a powerful force.",
"with each passing day.",
"making you unstoppable.",]]

const message = () => {
    const message = `${words[0][randomNumber()]} ${words[1][randomNumber()]} ${words[2][randomNumber()]}`
    return message;
}

function randomNumber() {
    return Math.floor(Math.random() * 4);
}

console.log(message());
