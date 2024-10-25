let mouseOverImage = document.querySelector(".mouse-event-img img");
let imageTag = document.querySelector(".image-tag");
mouseOverImage.src = "/images/next js assignment 5 1.png";
function mouseOver() {
  mouseOverImage.src = "/images/next js assignment 5 1.png";
  imageTag.innerText = `My Portfolio (Next JS & Tailwind CSS) `;
  setTimeout(() => {
    mouseOverImage.src = "/images/third portfolio.PNG";
    imageTag.innerText = `My Third Portfolio (Next JS & Tailwind CSS) `;
  }, 500);
  setTimeout(() => {
    mouseOverImage.src = "/images/hcj15.PNG";
    imageTag.innerText = `Rock Paper Scissor Game (HTML,CSS, JS) `;
  }, 1000);
  setTimeout(() => {
    mouseOverImage.src = "/images/hcj17.PNG";
    imageTag.innerText = `Number Guess Game (HTML,CSS, JS) `;
  }, 1500);
  setTimeout(() => {
    mouseOverImage.src = "/images/hcj24.png";
    imageTag.innerText = `Resume Builder (HTML,CSS, JS) `;
  }, 2000);
  setTimeout(() => {
    mouseOverImage.src = "/images/hcj12.PNG";
    imageTag.innerText = `Word Scramble Game (HTML,CSS, JS) `;
  }, 2500);
}

// Mouse Move
let box3Img = document.querySelector(".box-3-img");
let sizeInWidth = document.querySelector(".size .width");
let sizeInHeight = document.querySelector(".size .height");
function movement(e) {
  box3Img.classList.add("scale");
  let x = e.clientX;
  let y = e.clientY;
  sizeInWidth.innerText = `Width : ${x}px `;
  sizeInHeight.innerText = `Height : ${y}px `;
}

// Form Submti Event

let submitMsg = document.querySelector(".submitMsg");

function formSubmitted(e) {
  e.preventDefault();
  let emailInputBox = document.getElementById("email");

  if (emailInputBox.value !== "") {
    submitMsg.innerText = "Form Submitted Successfully";
  } else {
    submitMsg.innerText = "Enter Email and Msg";
  }
}
