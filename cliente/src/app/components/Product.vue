<template>
  
  <div>
        <figure class="text-center">
            <blockquote class="blockquote pt-4">
            <h1><a href="/" class="navbar-brand ">MegaMarket Nem</a></h1>
            </blockquote>
        </figure>
        <ul class="nav nav-pills nav-fill">

            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Orden</a>
            </li>

            <li class="nav-item">
                <a class="nav-link active" aria-current="page"  href="/index.product.html">Pedido</a>
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
                            <h2>Ingrese una Producto</h2>
                            <form @submit.prevent="sendProduct">

                                
                                <div class="form-group pt-2">
                                    <input type="text" v-model="product.name" placeholder="Nombre Producto" class="form-control pt-2">
                                </div>
                            
                                <div class="form-group pt-2">
                                    <input type="text" v-model="product.description" placeholder="Descripcion" class="form-control pt-2">
                                </div>

                                <div class="form-group pt-2">
                                     <input type="text" v-model="product.category" placeholder="Categoria" class="form-control pt-2">
                                </div>
                                <div class="form-group pt-2">
                                    <input type="number" v-model="product.price" placeholder="prise" class="form-control pt-2">
                                </div>
                                
                                 <div class="form-group pt-2">
                                    <input type="number" v-model="product.existen" placeholder=" Stock " class="form-control pt-2">
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
                                <th>Producto</th>
                                <th>Descripcion</th>
                                <th>Category</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product of products">
                                <td>{{product.name}}</td>
                                <td>{{product.description}}</td>
                                <td>{{product.category}}</td>
                                <td>{{product.price}}</td>
                                <td>{{product.existence}}</td>

                                <td>
                                    <button @click="deleteProduct(product._id)" class="btn btn-danger">Delete</button>
                                     <button @click="editProduct(product._id)" class="btn btn-secondary">Edit</button>
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
    
    class Product {
        constructor(name, description, category, price , existence){
            this.name = name;
            this.description = description;
            this.category = category;
            this.price = price;
            this.existence = existence;
           
        }
    }

    export default {
     data() {
            return {
                product: new Product(),
                products: [],
                edit: false,
                productToEdit: ''
                
            }
        },
        created() {
            this.getProducts();
        },
        methods: {

            //--------AGREGAR ORDEN
            sendProducts() {
                if(this.edit === false) {
                //console.log(this.orden);
                    fetch('/api/products',{
                        method: 'POST',
                        body: JSON.stringify(this.product),
                        headers:{
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getProducts();
                    })
                } else {
                    fetch('/api/products/' + this.productToEdit, {
                        method: 'PUT',
                        body: JSON.stringify(this.product),
                        headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }

                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getProducts();
                        this.edit = false;
                    });
                }

            
                this.product = new Product();
            },
            //-----------OBTENER ORDEN
            getProducts() {
                fetch('/api/products')
                .then(res => res.json())
                .then(data => {
                    this.products = data;
                    console.log(this.products)

                });
            },
            //--------ELIMINAR ORDEN
            deleteProducts(id) {
                fetch( '/api/products/' + id, {
                    method: 'DELETE',
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }

                })
                .then(res => res.json())
                .then(data => {
                    this.getProducts();
                });
            },
            //-------EDITAR ORDEN
            editProducts(id) {
                fetch( '/api/products/' + id)
                    .then(res => res.json())
                    .then(data => {
                        this.product = new Product(data.name, data.description, data.category, data.price, data.existence)
                        this.productToEdit = data._id;
                        this.edit = true;
                    })
            }
        }
}
</script>

