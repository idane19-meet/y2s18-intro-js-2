// YOUR TASK: Add more pictures!
var pictures = ['./imgs/a.jpg','./imgs/b.jpg','./imgs/c.jpeg','./imgs/d.jpeg','./imgs/e.jpeg'];
var currentIndex = 0;

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

  // YOUR TASK: Finish this function!
  var img = document.getElementsByTagName("img");
  img[0].src = pictures[currentIndex];
}
document.getElementsByTagName("button")[0].addEventListener("click", showNextPicture);