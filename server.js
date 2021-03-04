var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
const authController = require("./api/Controllers/authController")
const port = 3000


const postRouter = require('./api/routes/postRoutes');
//const userRouter = require('./api/routes/userRoutes');

var app = express();


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/blogs', { useNewUrlParser: true }); 
mongoose.connection.on('connected',()=>{
    console.log("connected to mongodb successfully");
});
mongoose.connection.on('error',()=>{
    console.log("error in mongoDb connection");
})

app.use(cors());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/v1/posts', postRouter);
app.use('/login', authController.login);
app.use('/signup', authController.signup);


app.get('/',(req,res)=>{
    res.send('blog post');
})
app.listen(port,()=>{
    console.log("app listening to port 3000");
});
