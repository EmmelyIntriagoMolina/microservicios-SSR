<template>
  
  <div>
        <figure class="text-center">
            <blockquote class="blockquote pt-4">
            <h1><a href="/" class="navbar-brand ">MegaMarket Nem</a></h1>
            </blockquote>
        </figure>
        <ul class="nav nav-pills nav-fill">

            <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">Orden</a>
            </li>

            <li class="nav-item">
                <a class="nav-link active" aria-current="page"  href="/index.product.html">Productos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/index.cliente.html">Cliente</a>
            </li>
        </ul>
        

        <div class="container">
            <div class="row pt-5">
                <div class="col-md-4 ">
                    <div class="card">
                        <div class="card-body  ">
                            <h2>Ingrese Producto</h2>
                            <form @submit.prevent="sendProducto">

                                
                                <div class="form-group pt-2">
                                    <input type="text" v-model="producto.name" placeholder="Nombre de Producto" class="form-control pt-2">
                                </div>
                            
                                <div class="form-group pt-2">
                                    <input type="text" v-model="producto.description" placeholder="Descripcion del producto" class="form-control pt-2">
                                </div>

                                <div class="form-group pt-2">
                                     <input type="text" v-model="producto.category" placeholder="Categoria" class="form-control pt-2">
                                </div>
                                <div class="form-group pt-2">
                                    <input type="Number" v-model="producto.price" placeholder="Precio" class="form-control pt-2">
                                </div>

                                <div class="form-group pt-2">
                                     <input type="Number" v-model="producto.existence" placeholder="Stock" class="form-control pt-2">
                                </div>
                                

                                <div class="d-grid gap-4">
                                <template v-if="edit === false">
                                    <button class="btn btn-primary btn-block gap-4">Guardar</button>  
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
                    <table class="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Category</th>
                                <th>Precio</th>
                                <th>Existente</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="producto of productos">
                                <td>{{producto.name}}</td>
                                <td>{{producto.description}}</td>
                                <td>{{producto.category}}</td>
                                <td>{{producto.price}}</td>
                                <td>{{producto.existence}}</td>

                                <td>
                                    <button @click="deleteProducto(producto._id)" class="btn btn-danger">✘</button>
                                     <button @click="editProducto(producto._id)" class="btn btn-info">✔</button>
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
    
    class Producto {

        constructor( name, description, category, price, existence) {
            this.name = name,
            this.description = description,
            this.category = category,
            this.price = price,
            this.existence = existence
            
        }
    }
    export default {
     data() {
            return {
                producto: new Producto(),
                productos: [],
                edit: false,
                productoToEdit: ''
                
            }
        },
        created() {
            this.getProducto();
        },
        methods: {

            //--------AGREGAR ORDEN
            sendProducto() {
                if(this.edit === false) {
                //console.log(this.orden);
                    fetch('/api/products',{
                        method: 'POST',
                        body: JSON.stringify(this.producto),
                        headers:{
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getProducto();
                    })
                } else {
                    fetch('/api/products/' + this.productoToEdit, {
                        method: 'PUT',
                        body: JSON.stringify(this.producto),
                        headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }

                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getProducto();
                        this.edit = false;
                    });
                }

            
                this.producto = new Producto();
            },
            //-----------OBTENER ORDEN
            getProducto() {
                fetch('/api/products')
                .then(res => res.json())
                .then(data => {
                    this.productos = data;
                    console.log(this.productos)

                });
            },
            //--------ELIMINAR ORDEN
            deleteProducto(id) {
                fetch( '/api/products/' + id, {
                    method: 'DELETE',
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }

                })
                .then(res => res.json())
                .then(data => {
                    this.getProducto();
                });
            },
            //-------EDITAR ORDEN
            editProducto(id) {
                fetch( '/api/products/' + id)
                    .then(res => res.json())
                    .then(data => {
                        this.producto = new Producto(data.name, data.description, data.category, data.price, data.existence)
                        this.productoToEdit = data._id;
                        this.edit = true;
                    })
            }
        }
}
</script>


