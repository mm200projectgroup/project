const express = require('express');
const bodyParser = require('body-parser');
const ourServer = express();
const port = (process.env.PORT || 8080);
const users = [];
//let output = document.getElementById("output");


ourServer.set('port', port);
ourServer.use(express.static('public'));
ourServer.use(bodyParser.json());

ourServer.listen(ourServer.get('port'), function () {
    console.log('server running', ourServer.get('port'));
});

ourServer.post("/app/user", function (req, res) {
    //res.send(req.body.email).end();
    let user = req.body;

    user.id = users.length + 1;
    users.push(user);

    res.json(user).end();
    console.log(req.body);
});

ourServer.post("/app/login", function (req, res) {
    //res.send("Hello");
    let login = req.body;

    for(let i in users){
        if(login.email == users[i].email){
            if(login.password == users[i].password){
               // document.body.innerHTML = "Hello, " + users[i].name + "!";
                res.send("login successful");
            }
            else {//output.innerHTML = "Wrong password";
            res.send("Wrong password");}
        }
        else{//output.innerHTML = "User does not exist";
        res.send(JSON.stringify(users))}
    }


});
