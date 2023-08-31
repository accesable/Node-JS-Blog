//This is the news router module which defined 
//from the exported module in new.js
const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app){

    app.use('/news',newsRouter)
    //app.get('/news', (req,res) => res.render('news'))

    app.use('/',siteRouter);
}

module.exports = route;