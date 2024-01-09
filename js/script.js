var qoute = [
    {
        qoute: "Be yourself; everyone else is already taken",
        auther: "Oscar Wilde"
    },
    {
        qoute: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
        auther: "Marilyn Monroe"
    },
    {
        qoute: "So many books, so little time.",
        auther: "Frank Zappa"
    },
    {
        qoute: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        auther: "Albert Einstein"
    },
]


function getQoutes() {

   
    var num = Math.floor(Math.random() * qoute.length)
    console.log(num)

    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].auther;

}