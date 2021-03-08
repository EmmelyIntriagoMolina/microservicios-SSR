let _userService=null

class UserController
{
    constructor({UserService})
    {
        _userService= UserService;

    }
    //get es una consulta individual
    // req localhost:5000/usuario/25
    // res  { nombre:john, username:cualquiera, pass:nose }
    async get(req,res)
    {
        const {userId } =  req.params;
        const user = await _userService.get(userId);
        return res.send(user);

    }
    //getAll
    // req localhost:5000/usuario/
    async getAll(req,res)
    {
        const users= await _userService.getAll();
        return res.send(users);
    }
    //create
    // req POST localhost:5000/usuario
    // req body  { nombre:john, username:cualquiera, pass:nose }
    
    async create(req,res)
    {
        const {body} =  req;
        console.log(body)
        
        const  createdUser = await _userService.create(body);
        res.send(createdUser);
    }
    //update
    // req POST localhost:5000/usuario/25
    // req body  { nombre:juan, username:root, pass:123 }
    
    async update(req,res)
    {
        const {userId } =  req.params;
        const {body} =  req;
        const updatedUser =  await _userService.update(userId, body );
        res.send(updatedUser);
    }
    //delete
    // req localhost:5000/usuario/25
    async delete(req,res)
    {
        const {userId } =  req.params;
        const deletedUser = await _userService.delete(userId);
        return res.send(deletedUser);
    }

}
module.exports = UserController;