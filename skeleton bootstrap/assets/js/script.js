async function requestInfo(){
    //obtener la info del archivo computers.json
    const data = await fetch("./assets/json/computers.json");
    const json = await data.json()

    let html = "";



    //para cada post se van a descargar las imagenes

    for(let i = 0; i < json.computers.length; i++){
        const post = json.computers[i]
        const postUrl = await descargarImage(post.image)

        


        //crear targetas para cada post

    html += `<div class="contenedor-targeta">
    <div class="cabecera-targeta">

            <img src="${postUrl}" class="fadeIn">
            <h3 class="fadeIn">${post.name}</h3>
    </div>
    <div class="cuerpo-targeta">
        <div class="texto-targeta">
            <p class="fadeIn">${post.name}</p>
        </div>

        <div class="image-targeta">
            <img src="${postUrl}" class="fadeIn">
        </div>
</div>
</div>`
    }


    

    //agregar las targetas al contenedor
    document.querySelector('#contenedor').innerHTML = html;


 

}



async function descargarImage(url){
    console.log(`descargando ${url} ...`)

    const response = await fetch(`http://localhost:5500/assets/img/${url}`);

    const blob = await response.blob();

    const imgUrl = URL.createObjectURL(blob)
    console.log(`descarga completa de ${url} ...`)

    return imgUrl;
}


requestInfo();