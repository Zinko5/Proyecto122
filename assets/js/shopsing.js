function add(){
    let tblDat= document.getElementById('tablaT').insertRow(1);
    let c1= tblDat.insertCell(0);
    let c2= tblDat.insertCell(1);

    c1.innerText='nafea';
    c2.innerHTML='asda';
}

function remove(){
    let tblDat= document.getElementById('tablaT').deleteRow(1);
}