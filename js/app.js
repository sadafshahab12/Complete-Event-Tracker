let count = 0;
let counter = document.querySelector(".counter");
let image = document.querySelector(".image");
counter.innerText = `Count : ${count}`;
function increment() {
  counter.innerText = `Count : ${(count += 1)}`;
}
function reset() {
  counter.innerText = `Count : ${(count = 0)}`;
}

// -----------Image--------------
let slide = 1;
function leftSlider() {
  console.log((slide += -1));

  if (slide == 1) {
    image.src = "./images/hc6.PNG";
  } else if (slide == 2) {
    image.src = "./images/hcj12.PNG";
  } else if (slide == 3) {
    image.src = "./images/hcj15.PNG";
  } else if (slide == 4) {
    image.src = "./images/hcj17.PNG";
  } else if (slide == 5) {
    image.src = "./images/hcj24.png";
  } else {
    slide = 6;
  }
}

function rightSlider() {
  console.log((slide += 1));
  if (slide == 1) {
    image.src = "./images/hc6.PNG";
  } else if (slide == 2) {
    image.src = "./images/hcj12.PNG";
  } else if (slide == 3) {
    image.src = "./images/hcj15.PNG";
  } else if (slide == 4) {
    image.src = "./images/hcj17.PNG";
  } else if (slide == 5) {
    image.src = "./images/hcj24.png";
  } else {
    slide = 0;
  }
}
