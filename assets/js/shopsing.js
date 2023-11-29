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

function contar(){
    let tab= document.getElementById('tablaT');
    let filas= tab.getElementsByTagName('tbody')[0];

    console.log('Nro: '+(filas.children.length-1));
}

function getName(but){
    const cad = but.name;
    const arr = cad.split(" ",2);
    /*for(let i=0; i<arr.length;i++){
        console.log(arr[i]);
    }*/
    console.log(cad);
    console.log(arr);
}