const BaseRepository =  require('./base.repository');

let _order=null;

class OrderRepository extends BaseRepository
{

    constructor({Order})
    {
        super(Order);
        _order= Order;
    }

    async getProductByNumOrder(numOrder)
    {
        return await _order.findOne({numOrder})
    }


}

module.exports = OrderRepository;