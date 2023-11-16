function verifica(){
    
    let us= document.getElementById('us').value;
    let pa= document.getElementById('pass').value;
    if(us!="" && pa!=""){
        window.location.href= "index.html";
    }
    else
        alert("Llena todos los campos");
}