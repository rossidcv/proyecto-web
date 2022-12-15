sup=`
   <header>
      <div>         
         <a class="brand" href="index.html"><img src="./imagenes/brand.png" width="55" alt="logo">Skincare</a>
         <input type="checkbox" id="check">
         <label for="check" class="checkbtn">            
            <span id="menu-abrir">&#9776;</span>
            <span id="menu-cerrar">X</span>
         </label>
         <ul class="menu">               
            <li class="menu-li"><a href="index.html" class="menu-a">Inicio</a></li>              
            <li class="menu-li" ><a href="ver-mas.html" class="menu-a">Aprender</a>
               <ul class="submenu">
                  <li class="submenu-li" ><a href="./piel-Mixta.html" class="submenu-a">Piel Mixta</a></li>
                  <li class="submenu-li" ><a href="./piel-grasa.html" class="submenu-a">Piel Grasa</a></li>
                  <li class="submenu-li" ><a href="./piel-seca.html" class="submenu-a">Piel Seca</a></li>
                  <li class="submenu-li" ><a href="./piel-sensible.html" class="submenu-a">Piel Sensible</a></li>
                  <li class="submenu-li" ><a href="./envejecimiento.html" class="submenu-a">Envejecimiento</a></li>
                  <li class="submenu-li" ><a href="./Piel-con-acne.html" class="submenu-a">Con Acne</a></li>
               </ul>
            </li>               
            <li class="menu-li"><a href="./test.html" class="menu-a">Test de piel</a></li>
            <li class="menu-li"><a href="./tratamientos.html" class="menu-a">Tratamientos</a></li>
            <li class="menu-li" ><a href="contacto.html" class="menu-a" >Contacto</a></li>
         </ul>
      </div>
   </header>
`
document.write(sup)

sup=`
<footer>
         <div class="contenido-footer">    
            <a class="brand" href="index.html">
               <img src="./imagenes/brand.png" width="55" alt="logo">Skincare
            </a>          
            <p>La rutina Skincare son aquellos tratamientos que se realizan para el cuidado de nuestra piel, permitiendo asi mantener su salud y mejorar su apariencia.</p>                     
         </div>

         <div class="contenido-footer"> 
            <p>INTEGRANTES:</p>               
            <ul>
               <li><a href="contacto.html"><i class="fa-sharp fa-solid fa-user"></i>Mercedes Llanos Pontaut</a></li>
               <li><a href="contacto.html"><i class="fa-sharp fa-solid fa-user"></i>Mónica Rossi</a></li>
               <li><a href="contacto.html"><i class="fa-sharp fa-solid fa-user"></i>Micaela Ruscitto</a></li>
            </ul>
         </div>

         <div class="contenido-footer">
            <a href="">
               <img width="100px" src="./imagenes/codoacodo.png">
            </a>
            <p>Proyecto Codo a Codo 2022 <br>
            TPO Desarrollo Web HTML CSS y JS</p>           
         </div>
</footer>
`
document.write(sup)



/*
// formulario de contacto

const $form= document.querySelector('#form')
$form.addEventListener('submit', handlesubmit)

 async function handlesubmit(event){
   event.preventDefault()   //evita que recargue la pagina
   const form= new FormData(this)  // guarda los atos del formulario
  const response= await fetch(this.action,{
      method:this.method,
      body: form,
      headers: {
         'Accept': 'application/json'     //como sera la respuesta

      }
   })
   if(response.ok){
      this.reset()         // para borrar los campos
      alert('Gracias por contactarte con nosotros, te responderemos pronto')
   }
}
*/

// Validar formulario

function validarform() {

   let nombre = document.getElementById("nombre").value; 
   let apellido = document.getElementById("apellido").value;
   let email = document.getElementById("email").value;
   let tel = document.getElementById("tel").value;
   let consulta = document.getElementById("consulta").value;
   var mensaje = document.getElementById("mensaje").value;
   
   
   // Validar nombre
       if (nombre == "") {
          alert("Por favor escribí tu nombre");
                 document.form.nombre.focus();
           return false;
       }
   // Validar apellido
       if (apellido == "") {
          alert("Por favor escribí tu apellido");
                document.form.apellido.focus();
           return false;
       }
   
   // Validar email
       if(form.email.value.length>0){
           var patronEmail=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;       
           if (!(patronEmail.test(form.email.value))) {
               alert('El email no tiene un formato valido!');
               return false; 
           }         
       }else{
           alert('Por favor escribí tu Email');
           document.form.email.focus();
           return false;            
       }
   
   // Validar teléfono
       if(form.tel.value.length>0){
            var patrontel=/(^([0-9]{0,15})|^)$/;
           if (!(patrontel.test(form.tel.value))) {
               alert('Contenido no válido. Rellená este campo con números');
               return false; 
           }         
       }else{
           alert("Por favor escribí tu Teléfono");
           document.form.tel.focus();
           return false;            
       }
   
   // Validar profesión
      if(!document.querySelector('input[name="professional"]:checked')) {
         alert('Error, selecciona las opciones de profesión');
         document.form.consulta.focus();
         return false;     
      }
   
   // Validar motivo de consulta
      if (form.consulta.selectedIndex==0){
          alert("Selecciona un motivo de su consulta.");
          document.form.consulta.focus();
          return false;
       }
   
   // Validar mensaje
      if( mensaje  == null || mensaje .length == "0" || /^\s+$/.test(mensaje) ) {
         alert("Por favor escribí tu consulta.");
         document.form.mensaje .focus();        
         return false;
      }
   
   //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
       document.form.enviar();
   
   }    
   
   
