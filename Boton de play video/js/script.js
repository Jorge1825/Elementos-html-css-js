let boton = document.querySelector('.boton');
let clip = document.querySelector('.clip');
let cerrar = document.querySelector('.cerrar');
let video = document.querySelector('video');


boton.onclick = function() {
    boton.classList.add("active");
    clip.classList.add("active");
    video.play();
    video.currentTime = 0;

}
cerrar.onclick = function() {
    boton.classList.remove("active");
    clip.classList.remove("active");
    video.pause();
    

}