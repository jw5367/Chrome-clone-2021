const images = ["1.jpg", "2.jpg", "3.jpg"];

const ranImage = images[Math.floor(Math.random() * images.length)];
const bgimg = document.createElement("img");
bgimg.classList.add("universe");

bgimg.src = `C:\Users\김지원\Desktop\Chrome-clone-2021\img\${ranImage}`;
document.body.appendChild(bgimg) ;
