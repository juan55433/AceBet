var datos = [];
let idd = 0;
window.onload = ()=>{
    cargarDatos();
    hide_c20();
    hide_c280();
    hide_c721();
    hide_button();
    cargar();
};
function recargar(){
    cargarDatos();
    hide_c20();
    hide_c280();
    hide_c721();
    hide_button();
    unblock_all();
    var circulofaila = [];
    circulofaila = getc191(circulofaila);
    document.getElementById(circulofaila[i]).style="background:#43A9AF";
    cargar();
    document.getElementById("qtn").style="pointer-events:all;";
}
function cargarDatos(){
    let temp = localStorage.getItem("datos");
    if(temp){
        datos = JSON.parse(temp);
        idd = datos.length;
    }
}
function cargar(){
    for(let a = 0; a < 200; a++)
    {
        i = Math.floor(Math.random() * 5);
        j = Math.floor(Math.random() * 5);
        k = Math.floor(Math.random() * 5);
        m = Math.floor(Math.random() * 5);
        if(i === j || i === k || i === m || j === k || j === m || k === m); 
        else break;
    }
}
function getc191(){
    
    var c191 = document.getElementById("circulo191");
    var c192 = document.getElementById("circulo192");
    var c193 = document.getElementById("circulo193");
    var c194 = document.getElementById("circulo194");
    var c195 = document.getElementById("circulo195");
    let a = c191.id;
    let b = c192.id;
    let c = c193.id;
    let d = c194.id;
    let e = c195.id;
    let circulofailed= [a,b,c,d,e];
    return circulofailed;
}
function getc280(){
    var c280 = document.getElementById("circulo280");
    var c281 = document.getElementById("circulo281");
    var c282 = document.getElementById("circulo282");
    var c283 = document.getElementById("circulo283");
    var c284 = document.getElementById("circulo284");
    let a = c280.id;
    let b = c281.id;
    let c = c282.id;
    let d = c283.id;
    let e = c284.id;
    let circulofailed= [a,b,c,d,e];
    return circulofailed;
}
function getc721(){
    var c721 = document.getElementById("circulo721");
    var c722 = document.getElementById("circulo722");
    var c723 = document.getElementById("circulo723");
    var c724 = document.getElementById("circulo724");
    var c725 = document.getElementById("circulo725");
    let a = c721.id;
    let b = c722.id;
    let c = c723.id;
    let d = c724.id;
    let e = c725.id;
    let circulofailed= [a,b,c,d,e];
    return circulofailed;
}
function getc20(){
    var c20 = document.getElementById("circulo20");
    var c21 = document.getElementById("circulo21");
    var c22 = document.getElementById("circulo22");
    var c23 = document.getElementById("circulo23");
    var c24 = document.getElementById("circulo24");
    let a = c20.id;
    let b = c21.id;
    let c = c22.id;
    let d = c23.id;
    let e = c24.id;
    let circulofailed= [a,b,c,d,e];
    return circulofailed;
}
function hide_c191(){
    var circulofailb = [];
    circulofailb = getc191(circulofailb);
    for(let v = 0; v < 5; v++){
        document.getElementById(circulofailb[v]).style="display:none;";
    }
}
function hide_c280(){
    var circulofailb = [];
    circulofailb = getc280(circulofailb);
    for(let v = 0; v < 5; v++){
        document.getElementById(circulofailb[v]).style="display:none;";
    }
}
function hide_c721(){
    var circulofailb = [];
    circulofailb = getc721(circulofailb);
    for(let v = 0; v < 5; v++){
        document.getElementById(circulofailb[v]).style="display:none;";
    }
}
function hide_c20(){
    var circulofailb = [];
    circulofailb = getc20(circulofailb);
    for(let v = 0; v < 5; v++){
        document.getElementById(circulofailb[v]).style="display:none;";
    }
}
function showc280(){
    var circulofailb = [];
    circulofailb = getc280(circulofailb);
    for(let v = 0; v < 5; v++){
        document.getElementById(circulofailb[v]).style="display:flex;";
    }
}
function showc721(){
    var circulofailc = [];
    circulofailc = getc721(circulofailc);
    for(let v = 0; v < 5; v++){
        document.getElementById(circulofailc[v]).style="display:flex;";
    }
}
function showc20(){
    var circulofailc = [];
    circulofailc = getc20(circulofailc);
    for(let v = 0; v < 5; v++){
        document.getElementById(circulofailc[v]).style="display:flex;";
    }
}
function showall(){
    var circulofaila = [];
    var circulofailb = [];
    var circulofailc = [];
    var circulofaild = [];
    circulofaila = getc191(circulofaila);
    circulofailb = getc280(circulofailb);
    circulofailc = getc721(circulofailc);
    circulofaild = getc20(circulofaild);
    for(let v = 0; v < 5; v++){
        document.getElementById(circulofaila[v]).style="display:flex;"; 
        document.getElementById(circulofailb[v]).style="display:flex;";
        document.getElementById(circulofailc[v]).style="display:flex;";
        document.getElementById(circulofaild[v]).style="display:flex;";
    }
}
function show_answer(){
    var circulofaila = [];
    var circulofailb = [];
    var circulofailc = [];
    var circulofaild = [];
    circulofaila = getc191(circulofaila);
    circulofailb = getc280(circulofailb);
    circulofailc = getc721(circulofailc);
    circulofaild = getc20(circulofaild);
    document.getElementById(circulofaila[i]).style="background:red";
    document.getElementById(circulofailb[i]).style="background:red";
    document.getElementById(circulofailb[j]).style="background:red";
    document.getElementById(circulofailc[i]).style="background:red";
    document.getElementById(circulofailc[j]).style="background:red";
    document.getElementById(circulofailc[k]).style="background:red";
    document.getElementById(circulofaild[i]).style="background:red";
    document.getElementById(circulofaild[j]).style="background:red";
    document.getElementById(circulofaild[k]).style="background:red";
    document.getElementById(circulofaild[m]).style="background:red";
}
function reply_click(clicked_id)
  {
      text = clicked_id;
  }
  function hide_button(){
    document.getElementById("btn").style="pointer-events:none;";

  }
  function unblock_all(){
    document.getElementById("frame").style="pointer-events:all";

  }
  function block_all(){
    document.getElementById("frame").style="pointer-events:none";
    document.getElementById("fath").style="pointer-events:all";
    document.getElementById("mm").style="pointer-events:all";
  }
  function show_button(){
    document.getElementById("btn").style="pointer-events:all";
  }
function getPoint191(){
    var qtn = document.getElementById("qtn");
    let cantidad = qtn.value;
    if(qtn.value){
        document.getElementById("qtn").style="pointer-events:none;";
        var stock = 1.9;
        var circulofailed = [];
        circulofailed = getc191(circulofailed);
        if(text === circulofailed[i]) { 
            alert("perdió");
            showall();
            show_answer();
            asignar_dinero_perdido(cantidad);
        }
        else{ 
            alert("continue");
            showc280();
            hide_c191();
            show_button();
        }
    }
    else{
        alert("DIGITE UNA CANTIDAD!!");
    }
}
function getPoint280(){
    var qtn = document.getElementById("qtn");
    let cantidad = qtn.value;
    var stock = 2.8;
    var circulofailed = [];
    circulofailed = getc280(circulofailed);
    if(text === circulofailed[i] || text === circulofailed[j]) {
        alert("perdió");
        showall();
        show_answer();
        asignar_dinero_perdido(cantidad);
    }
    else{ 
            alert("continue");
            showc721();
            hide_c280();
    }
}
function getPoint721(){
    var qtn = document.getElementById("qtn");
    let cantidad = qtn.value;
    var circulofailed = [];
    circulofailed = getc721(circulofailed);
    if(text === circulofailed[i] || text === circulofailed[j] || text === circulofailed[k]) {
        alert("perdió");
        showall();
        show_answer();
        asignar_dinero_perdido(cantidad);
    }
    else{ 
            alert("continue");
            showc20();
            hide_c721();
    }
}
function getPoint20(){
    var qtn = document.getElementById("qtn");
    let cantidad = qtn.value;
    var circulofailed = [];
    circulofailed = getc20(circulofailed);
    if(text === circulofailed[m] || text === circulofailed[i] || text === circulofailed[j] || text === circulofailed[k]  ) {
        alert("perdió");
        showall();
        show_answer();
        asignar_dinero_perdido(cantidad);
    }
    else{ 
        alert("Ganó");
        asignar_dinero_ganado(cantidad);
    }
}
function asignar_dinero_retirar(){
    var qtn = document.getElementById("qtn");
    let cantidad = qtn.value;
    var circulos = [];
    circulos = getc191(circulos);
    var displayvalue = document.getElementById('circulo284').style.display;
    if(displayvalue === "none"){
        cantidad  = Number(cantidad) * Number(1.9);
    }
    else{
        cantidad = Number(cantidad) * Number(2.8);
    }
    var displayvalue = document.getElementById('circulo20').style.display;
    if(displayvalue ==="flex"){
        cantidad = Number(cantidad) * Number(7.2);
    }
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
                montoactual = Number(datos[i].montoactual)+Number(cantidad);
                montototalganado = Number(datos[i].montototalganado);
                historial = datos[i].historial + "El día " + new Date().getDate() +" del mes "+ new Date().getMonth() +
                    " del año "+ new Date().getFullYear() + " apostó " + cantidad + " y fue ganada. -";
                estado = datos[i].estado;
                datos[i] = {nombre,telefono,email,cedula,password,id,montototalapostado,montoactual,montototalganado,historial, estado};
                guardar();
                alert("Ganó " + cantidad + " saldo actual: " + datos[i].montoactual);
                block_all();
                showall();
                show_answer();
                hide_button();
                return 1;
                }
                else{
                    alert("No tiene suficiente saldo");
                    return 0;
                }
            }
        }
    }
    return console.log(displayvalue);
}
function asignar_dinero_perdido(cantidad){
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
                block_all();
                showall();
                show_answer();
                hide_button();
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
function asignar_dinero_ganado(cantidad){
    cantidad = cantidad * 20;
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
                montoactual = Number(datos[i].montoactual)+Number(cantidad);
                montototalganado = Number(datos[i].montototalganado);
                historial = datos[i].historial + "El día " + new Date().getDate() +" del mes "+ new Date().getMonth() +
                    " del año "+ new Date().getFullYear() + " apostó " + cantidad + " y fue ganada. -";
                estado = datos[i].estado;
                datos[i] = {nombre,telefono,email,cedula,password,id,montototalapostado,montoactual,montototalganado,historial, estado};
                guardar();
                alert("Ganó " + cantidad + " saldo actual: " + datos[i].montoactual);
                block_all();
                showall();
                show_answer();
                hide_button();
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