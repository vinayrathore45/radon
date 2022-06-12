const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require('moment');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://vinayrathore45:vinay123@cluster0.euhc6tm.mongodb.net/vinayrathore45", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
app.use(
    function(req,res, next){
    const todayDate = moment()
    console.log(todayDate.format("YYYY-MM-DD HH:MM:SS")+","+req.ip+","+req.path)
    next()
    });

app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
