var express = require('express');
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();

const route = require('./route/route');
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

app.use('/api', route);

app.get('/', (req, res) => {
    res.send('some changess');
})

app.listen(PORT, () => {
    console.log("server start on ", + PORT);
});

module.exports={
    AutoIncrement:AutoIncrement
}