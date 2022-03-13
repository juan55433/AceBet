var datos = [];
let id = 0;
let cedulalogeada = '';
var estado = [];
let statuslogeo = 0;
let statuscedula = '';
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
function getDatos(){
    cargarDatos();
    for(let i in datos){
        if(datos[i]){
            if(datos[i].estado === 1){
                var nombreUser = document.getElementById('outnombre');
                nombreUser.value = datos[i].nombre;
                var telUser = document.getElementById('outnrotelefono');
                telUser.value = datos[i].telefono;
                var montoapostadouser = document.getElementById('outmontoapostado');
                montoapostadouser.value = datos[i].montototalapostado;
                var montoganadouser = document.getElementById('outmontoganado');
                montoganadouser.value = datos[i].montototalganado;
                var historialuser = document.getElementById('historial_de_apuesta');
                historialuser.value = datos[i].historial
                return 1;
            }
        }
    }
    return 0;
}
function offestado(){
    statuslogeo = 0;
    statuscedula = '';
    return 1;
}
function cambiaEstado(cedula){
    statuslogeo = 1;
    statuscedula = cedula;
    return cedula;
}
function logear(){
    cargarDatos();
    var cedulas = document.getElementById('cedula');
    var passwords = document.getElementById('password');
    if(getPassword(cedulas.value, passwords.value)){
        cambiaEstado(cedulas.value);
        location.href='main.html';
    }
    else{
        alert("Credenciales incorrectas");
    }
}
function Apuesta(montoapostado, estado, stack){
    this.id = id;
    this.montoapostado = montoapostado;
    estado = "PA";
    montoganado = montoapostado * stack;
    this.stack = stack;
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
            let montototalapostado = 0;
            let montototalganado = 0;
            let historial = [Apuesta];
            let montoactual = 0;
            let estado = 0;
            datos[id] = {nombre,telefono,email,cedula,password,id,montototalapostado,montoactual,montototalganado,historial, estado};
            guardar();
            logear();
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
function addcash(){
    var cedula = document.getElementById("ccrecarga");

    var monto = document.getElementById("cantidad");
    let cc = cedula.value;
    let montoa = monto.value;
    for(let i in datos){
        if(datos[i]){
            if(datos[i].cedula === cc){
                datos[i].montoactual.value += montoa;
                nombre = datos[i].nombre;
                telefono = datos[i].telefono;
                email = datos[i].email;
                cedula = datos[i].cedula;
                password = datos[i].password;
                id = datos[i].id;
                montototalapostado = datos[i].montototalapostado;
                montoactual = montoa +datos[i].montoactual;
                montototalganado = datos[i].montototalganado;
                historial = datos[i].historial;
                estado = datos[i].estado;
                datos[i] = {nombre,telefono,email,cedula,password,id,montototalapostado,montoactual,montototalganado,historial, estado};
                guardar();
                return 1;
            }
        }
    }
    return alert("no se encontró la cedula");
}