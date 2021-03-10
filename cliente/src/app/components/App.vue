<template>
  
  <div>
        <nav class="navbar navbar-light bg-light">
            <h1><a href="/" class="navbar-brand">MegaMarket Nem</a></h1>
                <a href="/" class="navbar-brand">Orden</a>
                <a href="/" class="navbar-brand">Pedido</a>
                <a href="/" class="navbar-brand">Usuario</a>
        </nav>
        

        <div class="container">
            <div class="row pt-5">
                <div class="col-md-4 ">
                    <div class="card">
                        <div class="card-body  ">
                            <h2>Ingrese una orden</h2>
                            <form @submit.prevent="sendOrden">

                                
                                <div class="form-group pt-2">
                                    <input type="Number" v-model="orden.numOrder" placeholder="Numero de orden" class="form-control pt-2">
                                </div>
                            
                                <div class="form-group pt-2">
                                    <input type="text" v-model="orden.userName" placeholder="Nombre del Cliente" class="form-control pt-2">
                                </div>

                                <div class="form-group pt-2">
                                     <input type="Date" v-model="orden.date" placeholder="Fecha" class="form-control pt-2">
                                </div>
                                <div class="form-group pt-2">
                                    <input type="text" v-model="orden.productName" placeholder="Nombre Producto" class="form-control pt-2">
                                </div>
                                
                                 <div class="form-group pt-2">
                                    <input type="text" v-model="orden.codigo" placeholder="Codigo " class="form-control pt-2">
                                </div>

                                <div class="form-group pt-2">
                                     <input type="Number" v-model="orden.cantidad" placeholder="Cantidad de productos" class="form-control pt-2">
                                </div>
                                

                                <template v-if="edit === false">
                                    <div class="form-group pt-2 ">
                                        <button  class="btn  btn-primary btn-block">Enviar</button>
                                    </div>
                                </template>
                                
                                 <template v-else>
                                    <div class="form-group pt-2 ">
                                        <button  class="btn  btn-primary btn-block">Actualizar</button>
                                    </div>
                                </template>


                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-7">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>N. Orden</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Nombre Producto</th>
                                <th>Codigo</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="orden of ordenes">
                                <td>{{orden.numOrder}}</td>
                                <td>{{orden.userName}}</td>
                                <td>{{orden.date}}</td>
                                <td>{{orden.productName}}</td>
                                <td>{{orden.codigo}}</td>
                                <td>{{orden.cantidad}}</td>

                                <td>
                                    <button @click="deleteOrden(orden._id)" class="btn btn-danger">Delete</button>
                                     <button @click="editOrden(orden._id)" class="btn btn-secondary">Edit</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

  </div>
</template>

<script>
    
    class Orden {

        constructor( numOrder, date, userName, productName, codigo, cantidad ) {
            this.numOrder = numOrder,
            this.date = date,
            this.userName = userName,
            this.productName = productName,
            this.codigo = codigo,
            this.cantidad = cantidad
            
        }
    }
    export default {
     data() {
            return {
                orden: new Orden(),
                ordenes: [],
                edit: false,
                ordenToEdit: ''
                
            }
        },
        created() {
            this.getOrdens();
        },
        methods: {

            //--------AGREGAR ORDEN
            sendOrden() {
                if(this.edit === false) {
                //console.log(this.orden);
                    fetch('/api/ordens',{
                        method: 'POST',
                        body: JSON.stringify(this.orden),
                        headers:{
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getOrdens();
                    })
                } else {
                    fetch('/api/ordens/' + this.ordenToEdit, {
                        method: 'PUT',
                        body: JSON.stringify(this.orden),
                        headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }

                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getOrdens();
                        this.edit = false;
                    });
                }

            
                this.orden = new Orden();
            },
            //-----------OBTENER ORDEN
            getOrdens() {
                fetch('/api/ordens')
                .then(res => res.json())
                .then(data => {
                    this.ordenes = data;
                    console.log(this.ordenes)

                });
            },
            //--------ELIMINAR ORDEN
            deleteOrden(id) {
                fetch( '/api/ordens/' + id, {
                    method: 'DELETE',
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }

                })
                .then(res => res.json())
                .then(data => {
                    this.getOrdens();
                });
            },
            //-------EDITAR ORDEN
            editOrden(id) {
                fetch( '/api/ordens/' + id)
                    .then(res => res.json())
                    .then(data => {
                        this.orden = new Orden(data.numOrder, data.date, data.userName, data.productName, data.codigo, data.cantidad)
                        this.ordenToEdit = data._id;
                        this.edit = true;
                    })
            }
        }
}
</script>


