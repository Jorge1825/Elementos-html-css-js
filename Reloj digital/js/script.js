setInterval(() => {
  let ho = document.getElementById("ho");
  let min = document.getElementById("min");
  let sg = document.getElementById("sg");
  let ampm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let hr_punto = document.querySelector(".hr_punto");
  let min_punto = document.querySelector(".min_punto");
  let sg_punto = document.querySelector(".sg_punto");
  


  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  //de 24 horas a 12 horas

  if (h > 12) {
    h = h - 12;
  }

  //Añadir cero en caso de que la hora sea menor a 10

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  ho.innerHTML = h + "<br><span>Horas</span>";
  min.innerHTML = m + "<br><span>Minutos</span>";
  sg.innerHTML = s+ "<br><span>Segundos</span>";
  ampm.innerHTML = am;

  //Tamaño de la linea dependiendo de la hora. min . sg.

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;


 //Movimiento de los puntos área de las puntos.
 
 hr_punto.style.transform = `rotate(${h * 30}deg)`;
 min_punto.style.transform = `rotate(${m * 6}deg)`;
 sg_punto.style.transform = `rotate(${s * 6}deg)`;
 


})
