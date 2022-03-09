
var datos = [];
let id = 0;
window.onload = ()=>{
    cargarDatos();
};
function cargarDatos(){
    let temp = localStorage.getItem("datos");
    if(temp){
        datos = JSON.parse(temp);
        id = datos.length;
    }
}
function restore(){
    cargarDatos();
    var cedulas = document.getElementById('cedula');
    var emails = document.getElementById('email');
    if(getEmail(cedulas.value, emails.value)){
        alert("Los pasos para restablecer la contraseña fueron enviados al correo "+ emails.value);
    }
    else{
        alert("Credenciales incorrectas");
    }
}
function logear(){
    cargarDatos();
    var cedulas = document.getElementById('cedula');
    var passwords = document.getElementById('password');
    if(getPassword(cedulas.value, passwords.value)){
        location.href='main.html';
    }
    else{
        alert("Credenciales incorrectas");
    }
}
function registrar(){
    cargarDatos();
    var nombres = document.getElementById('nombre');    
    var nrotelefonos = document.getElementById('nrotelefono');
    var emails = document.getElementById('email');
    var cedulas = document.getElementById('cedula');
    var passwords = document.getElementById('password');
    if(nombres.value && nrotelefonos.value && emails.value && cedulas.value && passwords.value){
        if(!buscarcedula(cedulas.value) || id==0){
            let nombre = nombres.value;
            let telefono = nrotelefonos.value;
            let email = emails.value;
            let cedula = cedulas.value;
            let password = passwords.value;
            datos[id] = {nombre,telefono,email,cedula,password,id};
            guardar();
            location.href='main.html';
        }
        else{
            alert("El usuario ya existe");
        }
    }
    else{
        alert("Campos incorrectos");
    }

}
function buscarcedula(cedula){
    for(let i in datos){
        if(datos[i]){
            if(datos[i].cedula === cedula) {
                return datos[i];
            }
            else{
                return undefined;
            }
        }
    }
    return undefined    ;
}
function getPassword(cedula, password){
    for(let i in datos){
        if(datos[i]){
            if(datos[i].cedula === cedula){
                if(datos[i].password === password) {
                    return datos[i];
                }
            }
        }
    }
    return undefined;
}
function getEmail(cedula, email){
    for(let i in datos){
        if(datos[i]){
            if(datos[i].cedula === cedula){
                if(datos[i].email === email) {
                    return datos[i];
                }
            }
        }
    }
    return undefined;
}
function guardar(){
    if(datos.length>0)
  {
    localStorage.setItem("datos",JSON.stringify(datos));
  }
}