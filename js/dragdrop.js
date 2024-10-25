let dragPic = document.querySelector(".drag-pic");
let dropPic = document.querySelector(".drop-pic");
let msg = document.querySelector(".drag-drop-msg");

dragPic.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "drag-pic");
  msg.innerText = "Dragging...";
});

dropPic.addEventListener("dragover", (e) => {
  e.preventDefault(); // prevent from reloading and easily drop the content
});

dropPic.addEventListener("drop", (e) => {
  e.preventDefault(); // prevent from reloading
  let dragData = e.dataTransfer.getData("text/plain"); // store the dragged data
  let draggedContent = document.querySelector(`.${dragData}`); // Get the dragged element
  dropPic.innerText = "";
  dropPic.appendChild(draggedContent);
  msg.innerText = "Image dropped successfully!";
});

let video = document.querySelector(".video video");
let mediaStatus = document.querySelector(".media-status");
let videoTime = document.querySelector(".video-time");
video.addEventListener("play",  () => {
  mediaStatus.innerText = "Media Status : Play";

});
video.addEventListener("pause", () => {
  mediaStatus.innerText = "Media Status : Paused";
});
video.addEventListener("ended", () => {
  mediaStatus.innerText = "Media Status : Ended";
});
video.addEventListener('timeupdate', () =>  {
     videoTime.innerText = "Current time: " + video.currentTime
});

