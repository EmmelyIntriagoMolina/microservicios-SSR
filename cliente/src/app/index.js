import Vue from 'vue';
import App from './components/App.vue';
import Producto from './components/Product.vue';
import Cliente from './components/Cliente.vue';

//vista orden
new Vue({
    render: h => h(App)
    
}).$mount('#app');

//vista producto
new Vue({
    render: e => e(Producto)
    
}).$mount('#product');

//vista producto
new Vue({
    render: a => a(Cliente)
    
}).$mount('#cliente');

