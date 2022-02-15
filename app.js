// navbar 
const topNav = document.getElementById("top-nav");
const menuToggle = document.getElementById("menu-toggle");

menuToggle.onclick = function(){
  topNav.classList.toggle("active");
  menuToggle.classList.toggle("active");
}

const item = document.getElementById('item1');
const video = document.getElementById('video');
const icon = document.getElementById('icon');
 
item.onclick = function(){
  
  video.classList.toggle("active");
 
}
icon.onclick = function(){
  
  video.classList.remove("active");
 
}

