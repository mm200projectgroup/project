const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = (process.env.PORT || 8080);
const db = require("./js/db.js"); 
const users = require('./js/users.js');


app.set('port', port);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(users);



app.listen(app.get('port'), function () {
    console.log('server running', app.get('port'));
});



