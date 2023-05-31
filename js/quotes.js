const quotes = [
    {
        quote: "Chicken is Yangnyum.",
        author: "Dongha Hwang",
    },
    {
        quote: "What is done out of love always takes place beyond good and evil.",
        author: "Nietzsche Friedrich wihelm",

    },
    {
        quote: "매출 21% 포기합니다. 이것이 로스트아크식 재투자입니다.",
        author: "The King Genral Kangsun Keum",
    },
    {
        quote: "Try not to become a man of success but rather to b ecome a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "A goal without a plan is just a wish.",
        author: "Antoine de Saint-Exupery",
    },
    {
        quote: "The last NoShow paid off with this Korea.",
        author: "Cristiano Ronaldo",
    },
    {
        quote: "True knowledge exists in knowing that you know nothing.",
        author: "Socrates",
    },
    {
        quote: "궁 쓰라고 안 했잖아요.",
        author: "최무무",
    },
    {
        quote: "나는 바보입니다.",
        author: "Patrace Evra",
    },
    {
        quote: "Shut up, Malfoy!",
        author: "Harry Potter",
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;