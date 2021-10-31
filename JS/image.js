const images = ["1.jpg", "2.jpg", "3.jpg"];

const ranImage = images[Math.floor(Math.random() * images.length)];
const bgimg = document.createElement("img");
bgimg.classList.add("universe");

bgimg.src = `img/${ranImage}`;
document.body.appendChild(bgimg) ;
