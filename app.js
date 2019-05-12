var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var mongoose = require('mongoose');

const config = require('./config/db');
const Images = require('./routes/images');
const Users = require('./routes/user.route');
const Videos = require('./routes/videos.route');
const About = require('./routes/about.route');
const Contact = require('./routes/contact.route');
const Soc = require('./routes/soc.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.connection, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected'); },
    err => { `Can not connect to database ${err}` }
);

// app.get('/', (req, res) => {
//     res.send('HI');
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, './public/site/dist/site')));
app.use('/uploads', express.static(path.join(__dirname, './uploads')));
app.use('/videos', Videos);
app.use('/images', Images);
app.use('/users', Users);
app.use('/abouts', About);
app.use('/contacts', Contact);
app.use('/soc', Soc);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/*', (req, res,) => {
    res.sendFile(path.join(__dirname, '/public/site/dist/site/index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server start on port: ${port}`);
});