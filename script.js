//your code here
// Highlight the link briefly when clicked
document.getElementById("song-link").addEventListener("click", function () {
  this.style.backgroundColor = "#ffd633";
  this.style.color = "#222";

  setTimeout(() => {
    this.style.backgroundColor = "";
    this.style.color = "";
  }, 500);
});
