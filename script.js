let Url="https://api.quotable.io/quotes/random";
let nextbtn=document.querySelector("#next");
let quote=document.querySelector("blockquote");
let span=document.querySelector("span")
async function getQuote(url){
    const resp=await fetch(url);
    let data=await resp.json();
    // console.log(data[0].content);
    // console.log(data[0].author);
    quote.innerHTML=data[0].content;
span.innerHTML=data[0].author;
}
getQuote(Url);
// nextbtn.addEventListener("click",getQuote(Url));
function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} ..By ${span.innerHTML}`,"Tweet window","width=600 ,height=300")
}