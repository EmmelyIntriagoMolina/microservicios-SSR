let _productService=null

class ProductController
{
    constructor({ProductService})
    {
        _productService= ProductService;

    }
    //get es una consulta individual
    // req localhost:5000/producto/25
    // res  { }
    async get(req,res)
    {
        const {productId } =  req.params;
        const product = await _productService.get(productId);
        return res.send(product);

    }
    //getAll
    // req localhost:5000/producto/
    async getAll(req,res)
    {
        const products= await _productService.getAll();
        return res.send(products);
    }
    //create
    // req POST localhost:5000/producto
    // req body  { }
    
    async create(req,res)
    {
        const {body} =  req;
        console.log(body)
        
        const  createdProduct = await _productsService.create(body);
        res.send(createdProduct);
    }
    //update
    // req POST localhost:5000/producto/25
    // req body  { }
    
    async update(req,res)
    {
        const {productId } =  req.params;
        const {body} =  req;
        const updatedProduct =  await _productService.update(productId, body );
        res.send(updatedProduct);
    }
    //delete
    // req localhost:5000/producto/25
    async delete(req,res)
    {
        const {productId } =  req.params;
        const deletedProduct = await _productService.delete(productId);
        return res.send(deletedProduct);
    }

}
module.exports = ProductController;