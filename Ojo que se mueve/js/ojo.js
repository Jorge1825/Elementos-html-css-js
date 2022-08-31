let punto = document.querySelector(".punto");
let Ojo = document.querySelector(".Ojo");

document.onmousemove = (e) => {
  let x = (e.clientX * 100) / window.innerWidth + "%";

  let y = (e.clientY * 100) / window.innerHeight + "%";

  punto.style.left = x;
  punto.style.top = y;
};
