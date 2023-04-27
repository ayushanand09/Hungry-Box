class ApiFeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr
    }
    search(){
        const keyword = this.queryStr.keyword ?{
            name:{
                $regex: this.queryStr.keyword,
                $options: "i" 
            },
        }
        : {};

        this.query = this.query.find({...keyword});
        return this;
    }

    //how many products visible on page
    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;

        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }
};

module.exports = ApiFeatures;