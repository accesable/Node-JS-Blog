class SiteController{
    index(req,res){
        res.render('site/')
    }
    about(req,res){
        res.render('site/about')
    }
}

module.exports = new SiteController