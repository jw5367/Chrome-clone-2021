const music = ["1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3", "6.mp3"];

const playList = document.createElement("audio");

playList.src = `audio/${music}`;
playList.innerHTML = "controls";
document.body.appendChild(playList) ;
 