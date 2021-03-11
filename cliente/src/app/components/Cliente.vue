<template>
 
    <div>
        <figure class="text-center">
            <blockquote class="blockquote">
           <h1><a href="/" class="navbar-brand ">MegaMarket Nem</a></h1>
            </blockquote>
        </figure>
        <ul class="nav nav-pills nav-fill">

            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Orden</a>
            </li>

            <li class="nav-item">
                <a class="nav-link " aria-current="page"  href="/index.product.html">Productos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/index.cliente.html">Cliente</a>
            </li>
        </ul>

         <div class="container">
            <div class="row pt-5">
                <div class="col-md-4 ">
                    <div class="card">
                        <div class="card-body  ">
                            <h2>Ingrese un Cliente</h2>
                            <form @submit.prevent="sendClient">

                                
                                <div class="form-group pt-2">
                                    <input type="text" v-model="client.cedula" placeholder="N° Cédula" class="form-control pt-2">
                                </div>
                            
                                <div class="form-group pt-2">
                                    <input type="text" v-model="client.nombre" placeholder="Nombres" class="form-control pt-2">
                                </div>

                                <div class="form-group pt-2">
                                     <input type="text" v-model="client.apellido" placeholder="Apellidos" class="form-control pt-2">
                                </div>
                                <div class="form-group pt-2">
                                    <input type="text" v-model="client.correo" placeholder="ney-emm@gmail.com" class="form-control pt-2">
                                </div>
                                
                                 

                                
                                <div class="d-grid gap-2">
                                <template v-if="edit === false">
                                    <button class="btn btn-primary btn-block">Guardar</button>  
                                </template>  
                                <template v-else>
                                    <button class="btn btn-primary btn-block" >Actualizar</button>              
                                </template>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <table class="table table-bordered border-primary ">
                        <thead>
                            <tr>
                                <th>Cedula</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="client of clients">                                 
                                <td>{{client.cedula}}</td>
                                <td>{{client.nombre}}</td>
                                <td>{{client.apellido}}</td>
                                <td>{{client.correo}}</td>
                                <td>
                                    <button @click="deleteClient(client._id)"
                                    class="btn btn-danger">✘</button>
                                    <button @click="updateClient(client._id)"
                                    class="btn btn-info">✔</button>
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
    class Client {
        constructor(cedula, nombre, apellido, correo){
            this.cedula = cedula;
            this.nombre = nombre;
            this.apellido = apellido;
            this.correo = correo;
            
        }
    }

    export default {
        data()
        {
            return{
                client: new Client(),
                clients: [ ],
                edit: false,
                clientToEdit: ''
            }
        },

        created(){
            this.getClient();
        },

        methods: {
            //rest
            getClient(){
                fetch('/api/clientes')
                .then(res=> res.json())
                .then(data =>{
                    this.clients = data;
                    console.log(this.clients);
                } );
            },
            
            sendClient() {

                if (this.edit === false){
                    fetch('/api/clientes', {
                        method: 'POST',
                        body: JSON.stringify(this.client),
                        headers:{
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    }).then( res => res.json())
                    .then(data => {
                        this.getClient();
                    })
                } else {
                    fetch('/api/clientes/' + this.clientToEdit,{
                        method: 'PUT',
                        body: JSON.stringify(this.client),
                        headers:{
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getClient();
                        this.edit = false ;
                    });
                }

                

                this.client = new Client ();
            },
            deleteClient(id){
                fetch('/api/clientes/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.getClient();
                })
            },
            updateClient(id){
                fetch('/api/clientes/' + id) 
                .then(res => res.json())
                //.then(data => console.log(data))
                .then(data => {
                    this.client = new Client(data.cedula, data.nombre, data.apellido,  data.correo);
                    this.edit = true;
                    this.clientToEdit = data._id;
                });
            }           
        }        
    }
</script>