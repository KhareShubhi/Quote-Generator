const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = " https://api.quotable.io/random";
let lang = "";

async function getquote(url){
  const response = await fetch(url);
  var data = await response.json();
  lang = "english";
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
const api_url1 = " https://hindi-quotes.vercel.app/random";

async function getquote2(url){
  const response = await fetch(url);
  var data = await response.json();
  lang = "hindi";
  quote.innerHTML = data.quote;
  author.innerHTML = data.type;
}

// async function getrefresh(url){
//     if(lang==="hindi"){
//         const response = await fetch(api_url1);
//         }
//         else if(lang==="english"){
//         const response = await fetch(api_url);
//         }
//     var data = await response.json();
//     if(quote.innerHTML==data.content  &&  author.innerHTML == data.author){
//         getquote(url);
//     }
//     else{
//         getquote2(url);
//     }
// }
async function getrefresh(){
  if(lang==="hindi"){
    getquote2(api_url1);
    }
  else if(lang==="english"){
    getquote(api_url);
    }
}