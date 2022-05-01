function random_bg_color() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const a = 0.5;

    const bgColor = "rgba(" + x + "," + y + "," + z + "," + a + ")";
    console.log(bgColor);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.background = `linear-gradient(to right, ${bgColor}, 
        ${'#' + randomColor})`;
}



const quoteText = document.querySelector(".quote")
const author = document.getElementById("name")
const quoteButton = document.querySelector("button")

const quotes = 
[
'The purpose of our lives is to be happy. — Dalai Lama',

'Life is what happens when you’re busy making other plans. — John Lennon',

'Get busy living or get busy dying. — Stephen King',

'You only live once, but if you do it right, once is enough. — Mae West',

'Many of life’s failures are people who did not realize how close they were to success when they gave up.– Thomas A. Edison',

'If you want to live a happy life, tie it to a goal, not to people or things.– Albert Einstein',

'Never let the fear of striking out keep you from playing the game.– Babe Ruth',

'Money and success don’t change people; they merely amplify what is already there. — Will Smith',

'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. – Steve Jobs'
]


quoteButton.addEventListener('click', getQuote)

function getQuote(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote
}