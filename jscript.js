function DarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
} 
function Order() {
  window.open('mailto:geramate1@gmail.com');
}