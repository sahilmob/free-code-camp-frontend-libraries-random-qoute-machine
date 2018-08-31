var text = document.getElementById("text");
var author = document.getElementById("author");
var newQuote = document.getElementById("new-quote");
var tweetQuote = document.getElementById("tweet-quote");

newQuote.addEventListener('click', getQuote)

function getQuote() {
    axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(({ data: { quotes } }) => {
            const quote = quotes[Math.floor(Math.random() * (quotes.length - 0 + 1)) + 0]
            console.log(quote);
            text.innerText = "“" + quote.quote
            author.innerText = "- " + quote.author
        })
}

getQuote()