let inputBox = document.querySelector(".keyPress");
let showKey = document.querySelector(".showKey");

inputBox.addEventListener("keypress", (eve) => {
  showKey.innerText = `Last Key Press: ${eve.key}`;
});

function showDropDown() {
  setTimeout(() => {
    let dropdownlist = document.querySelector(".dropdownlist");
    dropdownlist.classList.add("show");
  }, 300);
}
function hideDropDown() {
  let dropdownlist = document.querySelector(".dropdownlist");
  dropdownlist.classList.remove("show");
}

let showStatus = document.querySelector(".focus p");
let input = document.querySelector(".focus input");
function statusFocus() {
  showStatus.innerText = `Status : Focus`;
}
function statusBlur() {
  showStatus.innerText = `Status : Blur`;
}



function reSize() {
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  let resize = document.querySelector(".resize p");
  resize.innerText = `Window: Width: ${screenWidth}px,\n Height: ${screenHeight}px `;
}

reSize();

window.addEventListener('resize', reSize);
