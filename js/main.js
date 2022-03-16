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
function offestado(){
    for(let i in datos){
        if(datos[i]){
            if(datos[i].estado === 1){
                nombre = datos[i].nombre;
                telefono = datos[i].telefono;
                email = datos[i].email;
                cedula = datos[i].cedula;
                password = datos[i].password;
                id = datos[i].id;
                montototalapostado = datos[i].montototalapostado;
                montoactual = datos[i].montoactual;
                montototalganado = datos[i].montototalganado;
                historial = datos[i].historial;
                estado = 0;
                datos[i] = {nombre,telefono,email,cedula,password,id,montototalapostado,montoactual,montototalganado,historial, estado};
                guardar();
                return 1;
            }
        }
    }
    return 0;
}
function logear(){
    cargarDatos();
    var cedulas = document.getElementById('cedula');
    var passwords = document.getElementById('password');
    if(getPassword(cedulas.value, passwords.value)){
        offestado();
        statuslogeo(1,cedulas.value);
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
            let montototalapostado = 0;
            let montototalganado = 0;
            let historial = [];
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
function statuslogeo(status, cedula){
    var cedula = document.getElementById("cedula");
    let cc = cedula.value;
    for(let i in datos){
        if(datos[i]){
            if(datos[i].cedula === cc){  
                nombre = datos[i].nombre;
                telefono = datos[i].telefono;
                email = datos[i].email;
                cedula = datos[i].cedula;
                password = datos[i].password;
                id = datos[i].id;
                montototalapostado = datos[i].montototalapostado;
                montoactual = datos[i].montoactual;
                montototalganado = datos[i].montototalganado;
                historial = datos[i].historial;
                estado = status;
                datos[i] = {nombre,telefono,email,cedula,password,id,montototalapostado,montoactual,montototalganado,historial, estado};
                guardar();
                return 1;
            }
        }
    }
    return alert("no se encontró la cedula");
}
function apuesta(clicked_id){
    cargarDatos();
    let alt = Math.floor(Math.random() * 100);
    var qtn = document.getElementById("qtn");
    let cantidad = qtn.value;
    var idapuesta = document.getElementById(clicked_id).textContent;
    let valueapuesta = idapuesta * 10;
    if(cantidad){
        if(alt <= (100)- valueapuesta  ){
            for(let i in datos){
                if(datos[i]){
                    if(datos[i].estado === 1 ){  
                        if(datos[i].montoactual >= cantidad){
                            nombre = datos[i].nombre;
                            telefono = datos[i].telefono;
                            email = datos[i].email;
                            cedula = datos[i].cedula;
                            password = datos[i].password;
                            id = datos[i].id;
                            montototalapostado = Number(datos[i].montototalapostado) + Number(cantidad);
                            montoactual =  Number(datos[i].montoactual)+Number(cantidad);
                            montototalganado = Number(datos[i].montototalganado) + Number(cantidad);
                            historial = datos[i].historial + "El día " + new Date().getDate() +" del mes "+ new Date().getMonth() +
                            " del año "+ new Date().getFullYear() + " apostó " + cantidad + " y fue ganada. -";
                            estado = datos[i].estado;
                            datos[i] = {nombre,telefono,email,cedula,password,id,montototalapostado,montoactual,montototalganado,historial, estado};
                            guardar();
                            alert("Ganó " + cantidad + " saldo actual: " + datos[i].montoactual);
                            return 1;
                        }
                        else{
                            alert("No tiene suficiente saldo");
                            return 0;
                        }
                    }
                }
            }
        }else{
            for(let i in datos){
                if(datos[i]){
                    if(datos[i].estado === 1 && datos[i].montoactual >= cantidad){  
                        if(datos[i].montoactual >= cantidad){
                        nombre = datos[i].nombre;
                        telefono = datos[i].telefono;
                        email = datos[i].email;
                        cedula = datos[i].cedula;
                        password = datos[i].password;
                        id = datos[i].id;
                        montototalapostado = Number(datos[i].montototalapostado) + Number(cantidad);
                        montoactual = Number(datos[i].montoactual)-Number(cantidad);
                        montototalganado = Number(datos[i].montototalganado);
                        historial = datos[i].historial + "El día " + new Date().getDate() +" del mes "+ new Date().getMonth() +
                            " del año "+ new Date().getFullYear() + " apostó " + cantidad + " y fue perdida. -";
                        estado = datos[i].estado;
                        datos[i] = {nombre,telefono,email,cedula,password,id,montototalapostado,montoactual,montototalganado,historial, estado};
                        guardar();
                        alert("Perdió " + cantidad + " saldo actual: " + datos[i].montoactual);
                        return 1;
                        }
                        else{
                            alert("No tiene suficiente saldo");
                            return 0;
                        }
                    }
                }
            }
        }
    }
    else{
        alert("DIGITE UNA CANTIDAD!");
        return 0;
    }
}