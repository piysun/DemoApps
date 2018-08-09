var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
var autoIncrement = require('mongoose-auto-increment');
const route = require('./route/route');

var connections = mongoose.connect('mongodb://localhost/demoApplication');

autoIncrement.initialize(connections);
//
mongoose.connection.on('connected', () => {
    console.log("Database connected");
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
})

module.exports = {
    autoIncrement: autoIncrement
}