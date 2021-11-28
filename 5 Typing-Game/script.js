var quotes = [
    "Knowing yourself is the beginning of all wisdom",
    "Educating the mind without educating the heart is no education at all",
    "It is the mark of an educated mind to be able to entertain a thought without accepting it",
    "Be kind, for everyone you meet is fighting a harder battle",
    "Every heart sings a song, incomplete, until another heart whispers back",
    "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light"
]

// Choose a random no. between 0 and (quote.length-1)
let quotesSize = quotes.length;
let quote="";
let words;
let currentWord;
let count = 0;
let randomIndex;
let start, end;

// Start timer


function pilot(){
    count = 0;
    randomIndex = Math.floor(Math.random() * (quotesSize+1)) ;
    start = new Date();
    displayQuote();
}

// Display the quote at randomIndex
function displayQuote(){
    quote = quotes[randomIndex].trim();
    words = quote.split(" ").map((word)=> {
        return word.concat(" ");
    });
    words[words.length-1] = words[words.length-1].trim();
    currentWord = words[count];
    words[count] = `<span>${words[count]}</span>`;
    document.querySelector("#quote").innerHTML = words.join(" ");
}

function focusInput(){
    document.querySelector("#input").focus();
}

// Check input vs Word
function checkInputWithCurrentWord(){
    let input = document.querySelector("#input").value;
    if(currentWord == input ) {
        count++;
        document.querySelector("#input").value="";
        
        if (count == words.length) {
            end = new Date();
            let period = (end - start)/1000;
            document.querySelector("#print").innerHTML=`Congratulations! You took ${period} seconds. That's ${(period/words.length * 60).toFixed(3)} words/minute.`;
            count = 0;
            return;
        }
        
        displayQuote();
    }
}