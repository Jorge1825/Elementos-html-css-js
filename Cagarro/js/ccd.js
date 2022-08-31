let counter= 0;
let mes = "viuhjdfhdf";

function countingClicks(){
    counter= ++counter;
   
    if(counter == 1){
        
        document.getElementById('estilos').href = 'Triste.css' ;
        
    }
   else{
 
   location.reload();
   }
  


}