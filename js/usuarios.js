// creo las variables que posteriormente voy a utilizar para el registro y almacenamiento de datos.

var usuario,password,datosJSON1;
var comparacion;
var nombre, telefono, correo, contraseña, datosJSON;
var datos;

// cuando se de click en el boton de login capturara la informacion ingresada, la guardara en localstorage,
// luego ejecuta la funcion comparar para verificar los datos ingresados
  btnLogin.addEventListener('click', event => {
    event.preventDefault()

    usuario = document.getElementById("username").value;
    password = document.getElementById("pass").value;
        
    comparacion ={
        usuario: usuario,
        password: password
    };
    datosJSON1 = JSON.stringify(comparacion);

    localStorage.setItem("usuario", datosJSON1);

    if (username.value == "" || pass.value == "") {
      alert("Completa todos los campos...")
      return false
    }
    Comparar();
  })
// Al hacer click en el boton registrar tomara los datos ingrsados y los almacenara en las variables creadas,
// en el almacenamiento local.
  btnRegister.addEventListener("click", event => {
    event.preventDefault()
    if (nameRegister.value == "" ||
      phoneRegister.value == "" ||
      emailRegister.value == "" ||
      passwordRegister.value == "") {
      alert("Completa todos los campos")
      return false
    }
    else{
        nombre = document.getElementById("nameRegister").value;
        telefono = document.getElementById("phoneRegister").value;
        correo = document.getElementById("emailRegister").value;
        contraseña = document.getElementById("passwordRegister").value;
  
    // Crear un objeto con los datos
        datos = {
          nombre: nombre,
          telefono: telefono,
          correo: correo,
          contraseña: contraseña
        };
  
    // Convertir el objeto a JSON
        var datosJSON = JSON.stringify(datos);
  
    // Guardar los datos en el almacenamiento local
        localStorage.setItem("usuario", datosJSON);
  
    // Mostrar un mensaje de confirmación
        alert("Los datos se guardaron correctamente")
    }
  })

  // alterno las ventanas de login y registro, cuando se ve una bloquea la otra.
  showRegister.addEventListener("click", event => {
    event.preventDefault()
    if (register.style.display == "" || register.style.display == "none") {
      register.style.display = "block"
      formLogin.style.display = "none"
    }
  })
  hideRegister.addEventListener("click", event => {
    event.preventDefault()
    if (register.style.display == "block") {
      register.style.display = "none"
      formLogin.style.display = "block"
    }
  })
// Esta funcion la utilizo para comparar los datos ingresados en el login con los guaradados en el registro.
  function Comparar () {

    if (nombre==usuario && password==contraseña){
        alert("Bienvenido  " + nombre + "   Ha iniciado sesion correctamente");
    }
    else {
        alert("Los datos ingresados no han sido encontrados en nuestros sistema, intentelo de nuevo")
    }

    return alert;

  }