const quoteContainer = document.getElementById("quote-container");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuote = document.getElementById("new-quote");
let result = "";
let quoteData = "";

const getNewQuote = () => {
  let randomQuote = Math.floor(Math.random() * 10);
  quoteData = result[randomQuote];
  quote.innerText = `${quoteData.text}`;
  quoteData.author == null
    ? (author.innerText = "unknown")
    : (author.innerText = `${quoteData.author}`);
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    result = await data.json();

    getNewQuote();
  } catch (error) {}
};

function tweetQuote() {
  const quotetext = quote.innerText;
  const authortext = author.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quotetext}-${authortext}`;
  window.open(twitterUrl, "_blank");
}

twitterBtn.addEventListener("click", tweetQuote);
newQuote.addEventListener("click", getNewQuote);
getQuotes();
