const BaseService = require('./base.service');
let _orderRepository= null;

class OrderService extends BaseService
{
    constructor({ProductRepository})
    {
        super(ProductRepository);
        _orderRepository= ProductRepository;

    }
    async getOrderByNumOrder(numOrder)
    {
        return await _orderRepository.getOrderByNumOrder(numOrder);
    }

}

module.exports = OrderService;