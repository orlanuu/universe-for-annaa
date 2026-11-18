const messages = [
    {
        title: "A Little Fact About Me",
        text: "I could spend hours talking to you and never get bored."
    },
    {
        title: "One of 365 Reasons",
        text: "I love the way you make ordinary moments feel special."
    },
    {
        title: "Something I Want",
        text: "I want to travel the world with you and make memories everywhere."
    },
    {
        title: "A Little Secret",
        text: "Sometimes I catch myself smiling just because I'm thinking about you."
    },
    {
        title: "A Love Note",
        text: "Out of all the stars in the universe, I'm happiest that I found you."
    }
];

const starField = document.getElementById("star-field");
const messageBox = document.getElementById("message-box");
const messageTitle = document.getElementById("message-title");
const messageText = document.getElementById("message-text");
const closeButton = document.getElementById("close-message");
const counter = document.getElementById("counter");

let discoveredStars = 0;
const totalStars = 365;

function createStars() {
    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement("button");

        star.className = "star";
        star.textContent = "✦";
        star.style.left = Math.random() * 96 + "%";
        star.style.top = Math.random() * 96 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";

        star.addEventListener("click", () => {
            openMessage(i);
        });

        starField.appendChild(star);
    }
}

function openMessage(index) {
    const message = messages[index % messages.length];

    messageTitle.textContent = message.title;
    messageText.textContent = message.text;

    messageBox.classList.remove("hidden");
}

function closeMessage() {
    messageBox.classList.add("hidden");
}

closeButton.addEventListener("click", closeMessage);

createStars();
