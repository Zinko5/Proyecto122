
function add(but) {
    
        
    if (!busca(but)) {
        //let tblDat= document.getElementById('tablaT').insertRow(1);
        var tblDat= document.getElementById('tablaT');
        const cad = but.name + " ";
        const arr = cad.split(" ", 3);

        
        var fila= document.createElement('tr');
        for (let i = 0; i < arr.length; i++) {
            /*if (i == 0) {
                var c1 = tblDat.insertCell(0);
                c1.innerText = arr[i];
            }
            if (i == 1) {
                var c2 = tblDat.insertCell(1);
                c2.innerText = arr[i];
            }*/
            var col= document.createElement('td');
            if(i==0){
                col.innerText= arr[i]+' '+arr[i+1];
                i++;
            }
            else{
                col.innerText= arr[i];
            }
            fila.appendChild(col);
        }
        let cantidad=1;
        var c3 = document.createElement('td');
        c3.innerText = cantidad;
        fila.appendChild(c3);
        tblDat.appendChild(fila);
    }
    else{
        var tblDat = document.getElementById('tablaT');
        
        var p= parseInt(buscaPos(but));
        console.log(p);
        var pcel= 2;
        var celda= tblDat.rows[p].cells[pcel].textContent;
        celda= (parseInt(celda)+1);
        tblDat.rows[p].cells[pcel].innerText=celda;
    }

}

function busca(but) {
    const cad = but.name + " ";
    const arr = cad.split(" ", 3);
    let nombre = arr[0]+' '+arr[1];

    var tblDat = document.getElementById('tablaT');
    var fil = tblDat.rows.length;
    let flag= false;
    let col = 0;
    for (let i = 0; i < fil; i++) {
        var casilla= tblDat.rows[i].cells[col].textContent;
        if (casilla==nombre)
            flag= true;
    }
    return flag;
}

function buscaPos(but) {
    const cad = but.name + " ";
    const arr = cad.split(" ", 3);
    let posicion=-1;
    let nombre = arr[0]+' '+arr[1];
    let tblDat = document.getElementById('tablaT');
    let fil = tblDat.rows.length;
    let col = 0;
    for (let i = 0; i < fil; i++) {
        var casilla= tblDat.rows[i].cells[col].innerText;
        if (casilla==nombre)
            posicion= i;
    }
    return posicion;
}

function buscaCant(but) {
    const cad = but.name + " ";
    const arr = cad.split(" ", 3);
    let cantidad=-1;
    let nombre = arr[0]+' '+arr[1];
    let tblDat = document.getElementById('tablaT');
    let fil = tblDat.rows.length;
    let col = 0;
    for (let i = 0; i < fil; i++) {
        var casilla= tblDat.rows[i].cells[col].innerText;
        if (casilla==nombre)
            cantidad= tblDat.rows[i].cells[2].innerText;
    }
    return cantidad;
}

function remove(but) {
    //let tblDat = document.getElementById('tablaT').deleteRow(1);
    var tblDat = document.getElementById('tablaT');
    if(busca(but)){
        let posi= buscaPos(but);
        if(buscaCant(but)==1)
            tblDat.deleteRow(posi);
        else{
            let cant= tblDat.rows[posi].cells[2].textContent;
            cant = parseInt(cant)-1;
            tblDat.rows[posi].cells[2].innerText= cant;
        }
    }

}

//cuenta filas
function contar() {
    let tab = document.getElementById('tablaT');
    let filas = tab.rows.length;

    console.log('Nro: ' + (filas));
    if(filas!=1)
        return filas;
    else
        return filas-1;
}

//regresa la compra
function obtenShop(){
    let compra='<br>';
    let precio=0;
    let tblDat = document.getElementById('tablaT');

    let fil = tblDat.rows.length;
    for (let i = 1; i < fil; i++) {
        var c1= tblDat.rows[i].cells[0].innerText;
        var c2= tblDat.rows[i].cells[1].innerText;
        var c3= tblDat.rows[i].cells[2].innerText;
        compra+=c1+' &ensp;'+c2+' &ensp;'+c3+'<br>';
        precio+= parseInt(c2)*parseInt(c3); 
    }


    return compra+'<br>'+'Precio Total: '+precio+'<br>';
}

function getName(but) {
    const cad = but.name + " ";
    const arr = cad.split(" ", 2);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    //console.log(arr);
}

document.addEventListener('DOMContentLoaded', ()=> {
    // Tu código JavaScript aquí
    const open= document.getElementById('open');
    const close= document.getElementById('close');
    const buy= document.getElementById('buy');
    const container= document.getElementById('modalcont');
    const inpuNum= document.getElementById('numBanco');
    open.addEventListener('click', ()=> {
        let contador= contar();
        let muestra= document.getElementById('textoaca');
        if(contador==0){
            muestra.innerHTML= 'No tienes objetos seleccionados para comprar<br><br>';
            buy.disabled=true;
            inpuNum.disabled=true;
        }
        else{
            muestra.innerHTML= obtenShop();
            buy.disabled=false;
            inpuNum.disabled=false;
        }
        container.classList.add('showv');
    });

    close.addEventListener('click', ()=>{
        container.classList.remove('showv');
    })

    buy.addEventListener('click', ()=>{
        const num= document.getElementById('numBanco').value;
        console.log(num);
        if(num!='' && parseFloat(num)!=0 && contDig(num)>15)
            alert('¡Compra realizada con éxito!');
        else{
            alert('Rellena el campo de la tarjeta de crédito/débito para proceder con la compra\n'+
            '¡Recuerda el número mínimo de dígitos es 16!');
        }
    })
});

function contDig(num){
    let c=0;
    while(parseInt(num)!=0){
        num= parseInt(num)/10;
        c++;
    }
    return c;
}



