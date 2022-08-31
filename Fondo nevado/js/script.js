for(let fila = 0; fila <= window.innerHeight; fila+=50) {
    for(let columna = 0; columna < window.innerWidth/31; columna++){
    
        let copo = document.createElement("div");
        copo.className = "copo";
        let size = Math.random()*8;
        copo.style.cssText = 
        ` left : ${columna*30}px;
        top:${Math.random()* 50+ fila}px;
        width: ${size}px; height: ${size}px;
        opacity: ${Math.random()* 5};
     
        `

        document.body.appendChild(copo);
        
    
    }
}