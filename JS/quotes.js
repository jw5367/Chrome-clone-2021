const quotesAll = [
  {
  quote :"A wise man travels to discover himself." ,
  author :" -James Russell Lowell"
  },
  {
  quote :"Love yourself" ,
  author :" -me"
  },
  {
  quote :"Just life, we are still cool without luck." ,
  author :" -IU"
  },
  {
  quote :"No need to hurry. no need to sparkle. no need to be anybody but oneself." ,
  author :" -Adeline Virginia Woolf"
  },
  {
  quote :"You need chaos in your soul to give birth to a dancing star." ,
  author :" -Friedrich Wilhelm Nietzsche"
  },
  {
  quote :"Don't bother just to be better than your contemporaries or predecessors. try to be better than yourself." ,
  author :" -William Cuthbert Faulkner"
  },
  {
 quote :"Make your life a dream. and a dream a reality." ,
 author :" -Anthoine de Saint-Expuery"
 },
 {
 quote :"Life is not about waiting for the storms to pass. It is about learning how to dance in the rain." ,
 author :" -Vivian Greene"
 },
 {
 quote :"What makes you different or weird, that is your strength." ,
 author :" -Meryl Streep"
  },
 {
 quote : "As soon as you trust yourself, you will know how to live." ,
 author :" -Johann Wolfgang Von Goethes"
  }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todayQuote = quotesAll[Math.floor(Math.random() * quotesAll.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;