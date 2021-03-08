class BaseRepository
{
    constructor(model)
    {
        this.model= model;
    }
    //get
    async get(id)
    {
        return await this.model.findById(id)

    }
    //getAll
    async getAll()
    {
        return await this.model.find();
    }
    //create JSON 
    async create(entity)
    {
        try 
        {
            return await this.model.create(entity);
        }
        catch(ex)
        {
            console.log('Error interno:')
            console.log(ex);
        }
        
    }
    //update
    async update(id,entity)
    {
        return await this.model.findByIdAndUpdate(id, entity, {new:true});
    }
    //delete
    async delete(id)
    {
        return await this.model.findByIdAndDelete(id);
    }

}

module.exports = BaseRepository;

