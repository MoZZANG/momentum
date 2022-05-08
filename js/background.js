const imges = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImg = imges[Math.floor(Math.random()*imges.length)];

const bgImg = document.createElement("img");
bgImg.src=`img/${chosenImg}`;

document.body.appendChild(bgImg);