function verifica(){
    
    let us= document.getElementById('nom').value;
    let pa= document.getElementById('pa').value;
    let ema= document.getElementById('em').value;
    if(us!="" && pa!="" && ema!=""){
        window.location.href= "login.html";
    }
    else
        alert("Llena todos los campos");
}