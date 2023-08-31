class NewsController{

    index(req ,res){
        res.render('news/');
    }

    create(req,res){
        res.render('news/create')
    }
    

}

module.exports = new NewsController;