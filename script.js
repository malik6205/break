let breakCount = 0;

const breakCountDisplay = document.getElementById('breakCount');
const addBreakButton = document.getElementById('addBreak');
const resetBreakButton = document.getElementById('resetBreak');
const quoteDisplay = document.getElementById('quote');
const newQuoteButton = document.getElementById('newQuote');

const quotes = [
    "Every day is a new beginning. Take a deep breath, smile, and start again.",
    "The best way to predict the future is to create it.",
    "You are never too old to set another goal or to dream a new dream.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "You miss 100% of the shots you don’t take.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Believe it. Build it.",
    "You don’t have to be great to start, but you have to start to be great.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Your only limit is you."
];

addBreakButton.addEventListener('click', () => {
    breakCount++;
    breakCountDisplay.textContent = breakCount;
});

resetBreakButton.addEventListener('click', () => {
    breakCount = 0;
    breakCountDisplay.textContent = breakCount;
});

newQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
});