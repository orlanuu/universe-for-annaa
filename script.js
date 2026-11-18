
const messages = [
    {
        fact: "I think about you more often than you probably realize.",
        compliment: "Your baby-blue eyes are genuinely one of my favorite things to look at."
    },
    {
        fact: "I'm half Australian because my dad is from Australia.",
        compliment: "You're beautiful in ways I don't think you'll ever fully understand."
    },
    {
        fact: "My mom is from Kansas.",
        compliment: "Your smile could turn an ordinary day into my favorite day."
    },
    {
        fact: "I've been playing soccer since I was nine years old.",
        compliment: "You're my favorite girl in the entire universe."
    },
    {
        fact: "I've played for Barcelona and Juventus academies.",
        compliment: "I hope you never underestimate how special you are."
    },
    {
        fact: "I've had opportunities to train with international soccer teams.",
        compliment: "You have a way of making everything around you feel brighter."
    },
    {
        fact: "Surfing is my number one passion.",
        compliment: "Your blonde hair looks absolutely beautiful."
    },
    {
        fact: "Being away from the ocean for too long makes me really unhappy.",
        compliment: "You're beautiful whether you're dressed up or wearing absolutely anything."
    },
    {
        fact: "My favorite superhero is Superman.",
        compliment: "You're my favorite person to think about."
    },
    {
        fact: "I have a pretty big collection of seashells.",
        compliment: "Your eyes make me think of the clearest tropical water."
    },
    {
        fact: "My worst surfing injury happened when I landed directly on a dry coral reef.",
        compliment: "You're stronger than you probably give yourself credit for."
    },
    {
        fact: "My dream is to make enough money to live simply on a tropical island and surf every day.",
        compliment: "I hope you always feel as loved as you deserve to be."
    },
    {
        fact: "I have a whale shark plushie from the Georgia Aquarium.",
        compliment: "Even your little smile makes me happy."
    },
    {
        fact: "I love reading books.",
        compliment: "You're the kind of girl someone could write an entire book about."
    },
    {
        fact: "I enjoy writing short novels.",
        compliment: "If I could write a story about my favorite person, it would be about you."
    },
    {
        fact: "I play the drums, ukulele, and guitar.",
        compliment: "You're one of my favorite things in this world."
    },
    {
        fact: "I enjoy making postcards for my family during holidays.",
        compliment: "I hope you know that you deserve thoughtful little surprises too."
    },
    {
        fact: "I drive a Ford F-150 Lariat.",
        compliment: "You're pretty enough to make me forget what I was saying."
    },
    {
        fact: "I have a secret surf spot called Las Ruinas in Aguadilla, Puerto Rico.",
        compliment: "I wish I could show you every beautiful place I've ever found."
    },
    {
        fact: "My family has a vacation house in Puerto Rico, and I visit almost every summer.",
        compliment: "You make me excited about all the places we could visit together."
    },
    {
        fact: "Peru and Panama are two of my favorite countries.",
        compliment: "You're my favorite person to imagine adventures with."
    },
    {
        fact: "My favorite type of food is Peruvian food.",
        compliment: "You deserve all the happiness in the world."
    },
    {
        fact: "I love deep-water fishing.",
        compliment: "I think you're incredibly beautiful."
    },
    {
        fact: "I wear a men's size 13 shoe.",
        compliment: "I love how perfectly 5'1\" describes my favorite girl."
    },
    {
        fact: "I played on my high school golf team.",
        compliment: "I admire how dedicated you are to the things you do."
    },
    {
        fact: "My favorite fish is mahi-mahi.",
        compliment: "I could stare into your blue eyes for hours and never get tired of them."
    },
    {
        fact: "I enjoy making crafts and creating art.",
        compliment: "I genuinely don't think you realize how beautiful you are."
    },
    {
        fact: "I love watching rugby.",
        compliment: "You're someone worth cheering for every single day."
    },
    {
        fact: "My favorite soccer player is Erling Haaland.",
        compliment: "If I had to choose you a thousand times, I'd choose you every single time."
    },
    {
        fact: "I supported Spain during the last World Cup.",
        compliment: "I hope you know I'm always going to be one of your biggest supporters."
    },
    {
        fact: "I enjoy going to sporting events, even when I don't know much about the sport.",
        compliment: "I'd happily learn about anything that makes you happy."
    },
    {
        fact: "Sweet tea is one of my favorite drinks.",
        compliment: "You're sweeter than my favorite sweet tea."
    },
    {
        fact: "Strong smells can cause my face to swell, so I'm sensitive to fragrances.",
        compliment: "You don't need anything extra to be beautiful."
    },
    {
        fact: "The ocean is a huge part of who I am.",
        compliment: "You make my world feel like a much prettier place."
    },
    {
        fact: "I have a special connection to Puerto Rico because of my family's vacation house and summer visits.",
        compliment: "I can't wait to share more of my world with you."
    },
    {
        fact: "I have both Australian and American family roots.",
        compliment: "You're one of a kind, and I wouldn't trade you for anyone."
    },
    {
        fact: "I enjoy learning about different countries and cultures.",
        compliment: "There's always something new about you that I can appreciate."
    },
    {
        fact: "I love spending time near the water.",
        compliment: "Your eyes remind me of the ocean on a perfect sunny day."
    },
    {
        fact: "I would choose a day surfing over most other activities.",
        compliment: "You make even the simplest moments feel special."
    },
    {
        fact: "I enjoy creating things instead of always buying them.",
        compliment: "I love that I get to know all the little things that make you who you are."
    },
    {
        fact: "I have a creative side that comes out through music, writing, and art.",
        compliment: "You have so many reasons to be proud of the person you are."
    },
    {
        fact: "I enjoy playing several different musical instruments.",
        compliment: "Sometimes I wish you could see yourself through my eyes."
    },
    {
        fact: "I like collecting little reminders of places and experiences, like seashells.",
        compliment: "I hope we collect a lifetime of memories together."
    },
    {
        fact: "My tropical-island dream is about having a simple life centered around surfing.",
        compliment: "I hope you always chase the things that make your heart happy."
    },
    {
        fact: "I have a soft spot for ocean animals, including whale sharks.",
        compliment: "You're cute enough to make even my whale shark plushie jealous."
    },
    {
        fact: "I've spent years playing competitive soccer.",
        compliment: "I'm genuinely proud of the person you are."
    },
    {
        fact: "Golf is another sport I've enjoyed playing.",
        compliment: "You deserve to feel confident in everything you do."
    },
    {
        fact: "I love traveling and discovering places around the world.",
        compliment: "I think you'd make even the most beautiful destinations better."
    },
    {
        fact: "I like writing stories and imagining different worlds.",
        compliment: "If I had to choose my favorite story, it would be the one where I get to love you."
    },
    {
        fact: "Out of all the things I love doing, surfing will always hold a special place in my heart.",
        compliment: "And out of all the people in my life, you hold a special place in my heart."
    },
    {
        fact: "I pay attention to the little details about you, even the things you might not think I'd notice.",
        compliment: "Pink and leopard print will always remind me of you. I swear you look especially beautiful whenever you wear them."
    }
];

const starField = document.getElementById("star-field");
const messageBox = document.getElementById("message-box");
const messageTitle = document.getElementById("message-title");
const messageText = document.getElementById("message-text");
const closeButton = document.getElementById("close-message");
const counter = document.getElementById("counter");

const discoveredStars = new Set();

function createStars() {
    starField.innerHTML = "";

    messages.forEach((message, index) => {
        const star = document.createElement("button");

        star.className = "star";
        star.textContent = "✦";
        star.setAttribute("aria-label", `Star ${index + 1}`);

        star.style.left = (Math.random() * 94 + 3) + "%";
        star.style.top = (Math.random() * 94 + 3) + "%";
        star.style.animationDelay = Math.random() * 3 + "s";

        star.addEventListener("click", () => {
            openMessage(index, star);
        });

        starField.appendChild(star);
    });

    updateCounter();
}

function openMessage(index, star) {
    const message = messages[index];

    messageTitle.textContent = `Star ${index + 1} ✨`;

    messageText.innerHTML = "";

    const factHeading = document.createElement("h3");
    factHeading.textContent = "A little fact about me";

    const factParagraph = document.createElement("p");
    factParagraph.textContent = message.fact;

    const complimentHeading = document.createElement("h3");
    complimentHeading.textContent = "Something I love about you";

    const complimentParagraph = document.createElement("p");
    complimentParagraph.textContent = message.compliment;

    messageText.append(
        factHeading,
        factParagraph,
        complimentHeading,
        complimentParagraph
    );

    messageBox.classList.remove("hidden");

    if (!discoveredStars.has(index)) {
        discoveredStars.add(index);
        star.classList.add("discovered");
        updateCounter();
    }
}

function updateCounter() {
    counter.textContent =
        `${discoveredStars.size} of 365 stars discovered ✨`;
}

function closeMessage() {
    messageBox.classList.add("hidden");
}

closeButton.addEventListener("click", closeMessage);

createStars();
