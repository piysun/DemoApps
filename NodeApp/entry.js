var express = require('express');
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
<<<<<<< HEAD

=======
var autoIncrement = require('mongoose-auto-increment');
>>>>>>> 1d76704619a1b528cc8abad494d3a268e9009c06
const route = require('./route/route');

<<<<<<< HEAD


=======
var connections = mongoose.connect('mongodb://localhost/demoApplication');

autoIncrement.initialize(connections);
>>>>>>> 1d76704619a1b528cc8abad494d3a268e9009c06
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
<<<<<<< HEAD
});

module.exports={
    AutoIncrement:AutoIncrement
=======
})

module.exports = {
    autoIncrement: autoIncrement
>>>>>>> 1d76704619a1b528cc8abad494d3a268e9009c06
}