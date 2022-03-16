var datos = [];
let id = 0;
window.onload = ()=>{
    cargarDatos();
    getDatos();
};
function cargarDatos(){
    let temp = localStorage.getItem("datos");
    if(temp){
        datos = JSON.parse(temp);
        id = datos.length;
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