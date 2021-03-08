const BaseService = require('./base.service');
let _productRepository= null;

class UserService extends BaseService
{
    constructor({ProductRepository})
    {
        super(ProductRepository);
        _productRepository= ProductRepository;

    }
    async getProductByName(name)
    {
        return await _productRepository.getProductByName(name);
    }

}

module.exports = UserService;
