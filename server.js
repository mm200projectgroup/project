const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = (process.env.PORT || 3000);


app.set('port', port);
app.use(express.static('public'));
app.use(bodyParser.json());


const users = require('./js/users.js');
app.use('/app/users/', users);


app.listen(app.get('port'), function () {
    console.log('server running', app.get('port'));
});
