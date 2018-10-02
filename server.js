const express = require('express');
const bodyParser = require('body-parser');
const ourServer = express();
const port = (process.env.PORT || 8080);
let username;
const users = [];







ourServer.set('port', port);
ourServer.use(express.static('public'));
ourServer.use(bodyParser.json());

ourServer.listen(ourServer.get('port'), function () {
    console.log('server running', ourServer.get('port'));
});

ourServer.post("/app/user", function (req, res) {
    let user = req.body;
    user.id = users.length + 1;
    users.push(user);
    
    res.json(user).end();
    console.log(req.body);
    
});

ourServer.post("/app/login", function (req, res) {
   
    let login = req.body;

    let user = users.find(user => {
       return login.name === user.name && login.password === user.password;
    });
    
    if(user){
        console.log(user);
         res.json(user).end();
    }else{
        console.log("feil brukernavn eller passord")
         res.status(400).send("feil brukernavn eller passord");
    }
    
    
});