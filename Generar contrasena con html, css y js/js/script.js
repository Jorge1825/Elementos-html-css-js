
const generar= ()=>{



    const contra = document.getElementById("passtxt")

    let numeros ="0123456789";
    let letras ="abcdefghijklmnopqrstuvwxyz";
    let letrasM = letras.toUpperCase();
    let simbolos = "!#$%&/()=?{}+-|°¬<>*";
    let todo = letras + letrasM;
    
    let longitud=parseInt(inputLongitud.value);
    let checknum = checkboxnumber.checked;
    let checksimbolo = checkboxsimbolos.checked;


    
        if(checknum){
            todo += numeros 

            if(checksimbolo){
                todo += simbolos



                const pass = (longitud)=>{
    
    
                    let pass =""
                
                    for (let x = 0;x < longitud; x++){
                        do{
        
                            var p = todo.charAt(Math.floor(Math.random() * todo.length))
                            
                            
                        }while( (numeros.indexOf(p) !== -1 && numeros.indexOf(pass[pass.length -1 ]) !== -1) || 
                        (letras.indexOf(p)!== -1 && letras.indexOf(pass[pass.length -1 ]) !== -1) ||
                        (letrasM.indexOf(p)!== -1 && letrasM.indexOf(pass[pass.length -1 ]) !== -1) ||
                        (simbolos.indexOf(p)!== -1 && simbolos.indexOf(pass[pass.length -1 ]) !== -1)||
                        (pass[pass.length -1 ] === letras.indexOf(pass[pass.length -1 ]) )||
                        (pass[pass.length -1 ] === letrasM.indexOf(pass[pass.length -1 ]) )
                        ){
        
                            pass += p
                        };         
                        
                        
                    };
                    return pass;
                };
                contra.classList.remove("d-none");
                contra.innerText= `${pass(longitud)}`
                






            }else{
                const pass = (longitud)=>{
    
    
                    let pass =""
                
                    for (let x = 0;x < longitud; x++){
                        do{
        
                            var p = todo.charAt(Math.floor(Math.random() * todo.length))
                            
                            
                        }while( (numeros.indexOf(p) !== -1 && numeros.indexOf(pass[pass.length -1 ]) !== -1) || 
                        (letras.indexOf(p)!== -1 && letras.indexOf(pass[pass.length -1 ]) !== -1) ||
                        (letrasM.indexOf(p)!== -1 && letrasM.indexOf(pass[pass.length -1 ]) !== -1) ||
                        (pass[pass.length -1 ] === letras.indexOf(pass[pass.length -1 ]) )||
                        (pass[pass.length -1 ] === letrasM.indexOf(pass[pass.length -1 ]) )
                        ){
        
                            pass += p
                        };        
                        
                        
                    };
                    return pass;
                };
                contra.classList.remove("d-none");
                contra.innerText= `${pass(longitud)}`
            


            };

            
        }else if(checksimbolo){
                todo += simbolos

                const pass = (longitud)=>{
    
    
                    let pass =""
                
                    for (let x = 0;x < longitud; x++){
                        do{
        
                            var p = todo.charAt(Math.floor(Math.random() * todo.length))
                            
                            
                        }while((letras.indexOf(p)!== -1 && letras.indexOf(pass[pass.length -1 ]) !== -1) ||
                        (letrasM.indexOf(p)!== -1 && letrasM.indexOf(pass[pass.length -1 ]) !== -1) ||
                        (simbolos.indexOf(p)!== -1 && simbolos.indexOf(pass[pass.length -1 ]) !== -1)||
                        (pass[pass.length -1 ] === letras.indexOf(pass[pass.length -1 ]) )||
                        (pass[pass.length -1 ] === letrasM.indexOf(pass[pass.length -1 ]) )
                        ){
        
                            pass += p
                        };        
                        
                        
                    };
                    return pass;
                };
                contra.classList.remove("d-none");
                contra.innerText= `${pass(longitud)}`
            


            
        }else{

            const pass = (longitud)=>{
    
    
                let pass =""
                for (let x = 0;x < longitud; x++){
                    do{
    
                        var p = todo.charAt(Math.floor(Math.random() * todo.length))
                        
                        
                    }while((letras.indexOf(p)!== -1 && letras.indexOf(pass[pass.length -1 ]) !== -1) ||
                    (letrasM.indexOf(p)!== -1 && letrasM.indexOf(pass[pass.length -1 ]) !== -1) ||
                    (pass[pass.length -1 ] === letras.indexOf(pass[pass.length -1 ]) )||
                    (pass[pass.length -1 ] === letrasM.indexOf(pass[pass.length -1 ]) )
                    ){
    
                        pass += p
                    };        
                    
                    
                };

                return pass;
            };
    
            contra.classList.remove("d-none");
            contra.innerText= `${pass(longitud)}`;
    


        };
        
    
};
    
    
    










window.addEventListener("DOMContentLoaded",()=>{
    btnGenerar.addEventListener("click",()=>{
        generar();

    })

});
