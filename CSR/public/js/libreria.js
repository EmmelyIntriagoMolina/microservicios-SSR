var URLRest= `http://localhost:5000/v1/api/order`

window.addEventListener('load', function(){
    let htmlGenerado=''; 


    htmlGenerado+=`<label for="txtid">ID</label>`;
    htmlGenerado+=`<input type="text" id="txtid">`;

    htmlGenerado+=`<label for="txtnumOrder">Numero Orden</label>`;
    htmlGenerado+=`<input type="number" id="txtnumOrder">`;
    

    htmlGenerado+=`<label for="txtproductName">Producto</label>`;
    htmlGenerado+=`<input type="text" id="txtproductName">`;

    htmlGenerado+=`<label for="txtuserName">Cliente </label>`;
    htmlGenerado+=`<input type="text" id="txtuserName">`;

    htmlGenerado+=`<button id="btnnuevo">Nuevo</button>`;
    htmlGenerado+=`<button id="btnconsultar">Consultar</button>`;
    htmlGenerado+=`<button id="btngrabar">Grabar</button>`;
    htmlGenerado+=`<button id="btnmodificar">Modificar</button>`;
    htmlGenerado+=`<button id="btneliminar">Eliminar</button>`;

    htmlGenerado+=`<div id="divcontenido"></div>`;

    htmlCuerpo.innerHTML=htmlGenerado;

    //funcionabilidades
    //nuevo
    btnnuevo.addEventListener('click',function(){
        txtid.value='';
        txtnumOrder.value='';
        txtproductName.value='';
        txtuserName.value=''
    });
    
    //consultar
    btnconsultar.addEventListener('click',function(){
        fetch(URLRest).then(resultado=>{
            return resultado.json()
        })
        .then(consulta=>{
            var htmlGenerado=`<table border=1>`
            for (const indice in consulta)
            {
                htmlGenerado+=`<tr>`
                let elemento = consulta[indice];
                htmlGenerado+=`<td>${elemento.userName}</td><td>${elemento.productName}</td><td><button class='consultai' value='${elemento._id}'>${elemento.numOrder}</button></td>` 
                htmlGenerado+=`</tr>`
            }
            //insertamos el html al div
            divcontenido.innerHTML=htmlGenerado
            //asignaciOn del boton a la consulta indidividual
            document.querySelectorAll(`.consultai`).forEach(elemento=>{
                elemento.addEventListener('click', function(){
                    consultaIndividual(elemento.value);
                })
            })


        })
    })


    //grabar
    btngrabar.addEventListener('click',function(){
        var data = {numOrder:txtnumOrder.value, productName: txtproductName.value  , userName: txtuserName.value };
        fetch(
            URLRest,
            {
                method:'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-type':'application/json'
                }
            }
        ).then(respuesta=>{
            return respuesta.json()
        })
        .then(resultado=>{
            console.log(`El usuario con nombre ${resultado.userName} y el ID ${resultado._id} se almacenO correctamente`)
        })
        .catch(error=>{
            console.log(`Error`, error)
        })

        
    })
    //consulta individual
    function consultaIndividual(parametro)
    {
        var url = `${URLRest}/${parametro}`
        fetch(url).then(resultado=>{
            return resultado.json();
        }).then(respuesta=>{
            txtid.value= respuesta._id;
            txtnumOrder.value= respuesta.numOrder;
            txtproductName.value= respuesta.productName;
            txtuserName.value= respuesta.userName;

        })
    }
    
    //modificar
    btnmodificar.addEventListener('click',function(){
        var data = {numOrder:txtnumOrder.value, productName: txtproductName.value  , userName: txtuserName.value };
        fetch(
            `${URLRest}/${txtid.value}` ,
            {
                method:'PATCH',
                body: JSON.stringify(data),
                headers:{
                    'Content-type':'application/json'
                }
            }
        ).then(respuesta=>{
            return respuesta.json()
        })
        .then(resultado=>{
            console.log(`El usuario con nombre ${resultado.userName} y el ID ${resultado._id} se almacenO correctamente`)
        })
        .catch(error=>{
            console.log(`Error`, error)
        })
    })
    
    //eliminar
    btneliminar.addEventListener('click',function(){
        var url = `${URLRest}/${txtid.value}`
        fetch(url, {
            method:'DELETE'
        }).then(respuesta=>{
            return respuesta.json()
        })
        .then(resultado=>{
            console.log(resultado)
        })
        .catch(error=>{
            console.log(`Error`, error)
        })
    })



})


    
