const Blog = require('../models/Blog')
class NewsController{

    index(req ,res){
        // Find all blogs
    Blog.find({}).then((blogs) => {

        res.status(200).json(blogs)
    
}).catch((error) => {
    res.status(500).json({error: "Cannot retrive blogs data"})
});
        //res.render('news/');
    }

    create(req,res){
        res.render('news/create')
    }
    

}

module.exports = new NewsController;