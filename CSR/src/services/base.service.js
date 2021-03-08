class BaseService
{

    //constructor
    constructor(repository)
    {
        this.repository = repository;
    }
    //get
    async get(id)
    {
        if (!id)
        {
            const error = new Error();
            error.status=400;
            error.message="id must be sent"
            throw error;
        }
        const currentEntity= await this.repository.get(id);
        if (!currentEntity)
        {
            const error = new Error();
            error.status= 404;
            error.message="Entity does not found";
            throw error;
        }
        return currentEntity;
    }
    // getAll
    async getAll()
    {
        return await this.repository.getAll();
    }
    // create
    async create(entity)
    {
        // if (!entity)
        // {

        // }
        return await this.repository.create(entity);
    }
    // update
    async update(id,entity)
    {
        if (!id)
        {
            const error = new Error();
            error.status=400;
            error.message="id must be sent"
            throw error;
        }
        return await this.repository.update(id,entity);
    }
    // delete
    async delete(id)
    {
        if (!id)
        {
            const error = new Error();
            error.status=400;
            error.message="id must be sent"
            throw error;
        }
        return await this.repository.delete(id);
    }


}

module.exports = BaseService;
