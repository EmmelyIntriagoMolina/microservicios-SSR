let _orderService=null

class OrderController
{
    constructor({OrderService})
    {
        _orderService= OrderService;

    }
    //get es una consulta individual
    // req localhost:5000/orden/25
    // res  { }
    async get(req,res)
    {
        const {orderId } =  req.params;
        const order = await _orderService.get(orderId);
        return res.send(order);

    }
    //getAll
    // req localhost:5000/orden/
    async getAll(req,res)
    {
        const orders= await _orderService.getAll();
        return res.send(orders);
    }
    //create
    // req POST localhost:5000/usuario
    // req body  { }
    
    async create(req,res)
    {
        const {body} =  req;
        console.log(body)
        
        const  createdOrder = await _orderService.create(body);
        res.send(createdOrder);
    }
    //update
    // req POST localhost:5000/usuario/25
    // req body  { }
    
    async update(req,res)
    {
        const {orderId } =  req.params;
        const {body} =  req;
        const updatedOrder =  await _orderService.update(orderId, body );
        res.send(updatedOrder);
    }
    //delete
    // req localhost:5000/usuario/25
    async delete(req,res)
    {
        const {orderId } =  req.params;
        const deletedOrder = await _orderService.delete(orderId);
        return res.send(deletedOrder);
    }

}
module.exports = OrderController;