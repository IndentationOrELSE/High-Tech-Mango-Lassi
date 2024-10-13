var scale = 'scale(1)';
document.body.style.webkitTransform = scale;// Chrome, Opera, Safari
document.body.style.msTransform = scale;// IE 9
document.body.style.transform = scale; // General
// for(i = 0; i < 100000; i++){     setTimeout(() =>  	document.body.style.zoom = 1.0, 1000) }
document.body.style.zoom = (window.innerWidth / window.outerWidth)

document.getElementById("mangolassi").addEventListener("mousemove", function(){
const para = document.createElement("img");
para.src = 'mangoIco.ico'
para.style.position = "absolute";
para.style.top = event.clientY*1.75+(100 * Math.random()) + "px";
para.style.left = event.clientX + "px";
setTimeout(function(){para.style.opacity = '0.5'}, 1000)
  setTimeout(function(){para.remove()}, 2000)
document.body.appendChild(para);
})

document.getElementById("hightech").addEventListener("mousemove", function(){
const para = document.createElement("img");
para.src = 'laptoptransparent.ico'
para.style.position = "absolute";
para.style.width = '20px'
para.style.height = '20px'
para.style.top = event.clientY*2.75 + "px";
para.style.left = event.clientX + "px";
setTimeout(function(){para.style.opacity = '0.5'}, 1000)
  setTimeout(function(){para.remove()}, 2000)
document.body.appendChild(para);
})

function randomify(){
  document.body.style.backgroundColor = `rgb(${Math.floor(255*Math.random())}, ${Math.floor(255*Math.random())},     
  ${Math.floor(255*Math.random())})`;
}
randomify()
