for(let a = 0; a < 200; a++)
{
    i = Math.floor(Math.random() * 5);
    j = Math.floor(Math.random() * 5);
    k = Math.floor(Math.random() * 5);
    m = Math.floor(Math.random() * 5);
    if(i === j || i === k || i === m || j === k || j === m || k === m); 
    else break;
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
function getPoint191(){
    var circulofailed = [];
    circulofailed = getc191(circulofailed);
    if(text === circulofailed[i]) { 
        alert("perdió");
        show_answer();
    }
    else{ 
        alert("continue");
    }
}
function getPoint280(){
    var circulofailed = [];
    circulofailed = getc280(circulofailed);
    if(text === circulofailed[i] || text === circulofailed[j]) {
        alert("perdió");
        show_answer();
    }
    else{ 
            alert("continue");
    }
}
function getPoint721(){
    var circulofailed = [];
    circulofailed = getc721(circulofailed);
    if(text === circulofailed[i] || text === circulofailed[j] || text === circulofailed[k]) {
        alert("perdió");
        show_answer();
    }
    else{ 
            alert("continue");
    }
}
function getPoint20(){
    var circulofailed = [];
    circulofailed = getc20(circulofailed);
    if(text === circulofailed[m] || text === circulofailed[i] || text === circulofailed[j] || text === circulofailed[k]  ) {
        alert("perdió");
        show_answer();
    }
    else{ 
        alert("Ganó");
    }
}