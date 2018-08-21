var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
const route = require('./route/route');

const mail = require('./mail/mail');
const user = require('./route/userRouter');
mongoose.connect('mongodb://localhost/demoApplication');

//
mongoose.connection.on('connected', () => {
    console.log("database connected");
});

mongoose.connection.on('error', () => {
    console.log("database error");
});

const PORT = 3000;

app.use(cors());

//
app.use(bodyparser.json());

//

app.use('/api', route, mail, user);

app.get('/', (req, res) => {
    res.send('some changess');
})

app.listen(PORT, () => {
    console.log("server start on ", + PORT);
});