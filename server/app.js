var       mongoose =  require('mongoose'),
          express = require('express'), 
          bodyParser = require('body-parser') ,
          methodOverride  = require("method-override"),
                    Data  = require('./models/dataHard'),
                      app = express();


var port = process.env.port || 8080 ;
var methodOverride = require("method-override");
          
mongoose.connect("mongodb://localhost/Tyre" , { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
          


app.get('/' , (req,res) => {
    res.json({
        message : 'YO IT\'S WORKING '
    });
})


app.get('/tireImage' , (req,res) => {
    res.json({
        img1 : 'ikfvavawrva ' ,
        img2 : 'akuvdaksdhvblawd' , 
        img3 : 'askhbvauydbvlaw'
    });
})


app.get('/getData/' , (req,res) => {
   
    Data.find({} ,(err , foundDatas) => {
        if(err) {
            res.json(err);
        }   else {
            res.json(foundDatas);
        }
    })
})


app.post('/addData' , (req,res) => {
    const obj = {
        title : req.body.title ,
        description : req.body.description ,
        type : req.body.type ,
        suitable : req.body.suitable
    }

    Data.create(obj)
        .then(data => {
            data.save();
            res.json(data);
        }).catch(err => {
            res.json(err);
        })

});


app.listen(port , () => {
    console.log('Server is running');
});