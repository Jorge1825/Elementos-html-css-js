//Variable for save the data of the form
let listPets = [];
let isEdit = false
let isDeleteValues = false;
let oldCode;
let codePet = 1;



//funtion for delete the data of pet
function deleteValues(codePet){

  isDeleteValues = true;

  listPets.findIndex((element) => {
    if (element.code == codePet) {
        listPets.splice(element, 1);
    }
    });
  console.log(listPets);



  send()

}



//Function for edit the data of pet 
function editContent(code) {
  isEdit = true;
  oldCode = code;

  //Travel the array for find the pet and this information
  listPets.forEach((element) => {
    if (element.code == code) {
      
      let namePet = document.getElementById("inputNamePet");
      let nameOwner = document.getElementById("inputNameOwner");
      let phoneOwner = document.getElementById("inputPhone");
      let dateAppointment = document.getElementById("inputDate");
      let hourAppointment = document.getElementById("inputHour");
      let sintomas = document.getElementById("sintomas");
      

      //insert in the inputs the information of the pet
      namePet.value = element.namePet;
      nameOwner.value = element.nameOwner;
      phoneOwner.value = element.phone;
      dateAppointment.value = element.date;
      hourAppointment.value = element.hour;
      sintomas.value = element.sintomas;
      
      
        }
      }
    );


}






//Function for send the information the table 
function send() {

    const how = new Date();
    let namePet = document.getElementById("inputNamePet");
    let nameOwner = document.getElementById("inputNameOwner");
    let phoneOwner = document.getElementById("inputPhone");
    let dateAppointment = document.getElementById("inputDate");
    let hourAppointment = document.getElementById("inputHour");
    let sintomas = document.getElementById("sintomas");
    let alert = document.getElementById("alert");
    let setlistPetss = document.getElementById("setCardPet");

    //Function for validate the values of the inputs
    function validateValues() {

      //Validate all the values of the inputs and show the alert
      alert.classList.remove("d-none");
      alert.classList.add("bg-danger");


      //Validate if the values of pet 
      if(!isDeleteValues){
      !namePet.value ? alert.innerText = "El nombre de la mascota es obligatorio":
      !nameOwner.value ? alert.innerText = "El nombre del dueño es obligatorio":
      phoneOwner.value.length < 10 ? alert.innerText = "El número de teléfono debe tener 10 dígitos":
      !Date.parse(dateAppointment.value) ? alert.innerText = "La fecha de la cita es obligatoria":
      dateAppointment.value <= formatDate() ? alert.innerText = "La fecha de la cita debe ser mayor a la fecha actual":
      !hourAppointment.value ? alert.innerText = "La hora de la cita es obligatoria":
        //evaluar que la hora de la cita este entre el rango de 7:00 am a 12:00 pm o 2:00 pm a 6:00 pm
      hourAppointment.value < "07:00" || hourAppointment.value > "12:00" && hourAppointment.value < "14:00" || hourAppointment.value > "18:00" ? alert.innerText = "La hora de la cita debe estar entre las 7:00 am y 12:00 pm o 2:00 pm y 6:00 pm":
      !sintomas.value ? alert.innerText = "Los sintomas son obligatorios":
        [

          isEdit ? editValues(oldCode) : saveValues(),

          clearInputs(),
          alert.classList.remove("bg-danger"),
          alert.classList.remove("d-none"),
          alert.classList.add("bg-success"),
          alert.innerText = "Se agrego correctamente la cita",

          setTimeout(() => {
            alert.classList.add("d-none");
            alert.classList.remove("bg-success");
            alert.innerText = "";
          }, 2000),


        ];
      
        //setTimeOut for clear the alert negatives 
        setTimeout(() => {
          alert.classList.add("d-none");
          alert.classList.remove("bg-danger");
          alert.innerText = "";
        }, 3000);

      }else{
        
        console.log("delete");
        console.log(listPets);
        isDeleteValues = false;
        paintCard();

        alert.classList.remove("bg-danger"),
        alert.classList.remove("d-none"),
        alert.classList.add("bg-success"),
        alert.innerText = "Cita eliminada correctamente"

        setTimeout(() => {
          alert.classList.add("d-none");
          alert.classList.remove("bg-success");
          alert.innerText = "";
        }, 2000);

      }

    }


  validateValues();


  //Funtion for edit values of array and table
  function editValues(code){

      //Edit the values of array
      listPets.map((element) => {
        if (element.code == code) {
          element.namePet = namePet.value;
          element.nameOwner = nameOwner.value;
          element.phone = phoneOwner.value;
          element.date = dateAppointment.value;
          element.hour = hourAppointment.value;
          element.sintomas = sintomas.value;
          
        }
      });


      console.log(listPets);
      paintCard();
  }


  //Function for save the values in the table and array of listPets
  function saveValues() {

      

      listPets.push({
        code: codePet,
        namePet: namePet.value,
        nameOwner: nameOwner.value,
        phone: phoneOwner.value,
        hour: hourAppointment.value,
        date: dateAppointment.value,
        sintomas: sintomas.value,

      });


      codePet++;
      //Paint the values in the table
      paintCard();
      
    }




  //function for save the values in the table
  function paintCard() {
      setlistPetss.innerHTML = "";


      listPets.forEach((element) => {
          setlistPetss.innerHTML += `<div class="card mt-5 bg-transparent border-0" style="width: 18rem;">
          <div class="card-body">
            <h3 class="card-title fw-bold" id="lblNamePet"> ${element.namePet}</h3>
            <p class="card-text mt-3">
              <span><span class="fw-bold">Propietario: </span>${element.nameOwner}</span><br>
              <span><span class="fw-bold">Teléfono: </span>${element.phone}</span><br>
              <span><span class="fw-bold">Fecha: </span>${element.date}</span><br>
              <span><span class="fw-bold">Hora: </span>${element.hour}</span><br>
              <span><span class="fw-bold">Sintomas: </span>${element.sintomas}</span><br>
          
          </p>
          <button type="button" class="btn btn-danger" onclick="deleteValues(${element.code})">Eliminar <span class="x ms-2"></span></button>
          <button type="button" class="btn btn-primary" onclick="editContent(${element.code})">Editar <span class="lapiz ms-2"></span></button>
          
          </div>
        </div>
        <hr style="color:rgb(161, 161, 161)">
        `;


    });

      isEdit = false;

  }


  //Function to clear the inputs
  function clearInputs() {
      namePet.value = "";
      nameOwner.value = "";
      phoneOwner.value = "";
      hourAppointment.value = "";
      dateAppointment.value = "";
      sintomas.value = "";
  }



  //Function to validate if the date expedition is higher to the date current
  function formatDate() {
    let dateFormat = `${how.getFullYear()}-${(how.getMonth() + 1)}-${how.getDate().toString().length < 2 ? "0" + how.getDate() : how.getDate()}`;
    return dateFormat;
  }





}










