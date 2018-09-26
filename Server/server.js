const express = require('express');
const bodyParser = require('body-parser');
const ourServer = express();
const port = (process.env.PORT || 8080);

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

    for(let i in users){
        if(login.name == users[i].name){
            if(login.password == users[i].password){
               
            console.log("login successful");
            
                ourServer.get('/app/users', function(req,res, next){
                res.json(users).end();
                });
                
                
                
                
            }
            else {
            console.log("Wrong password");}
        }
        else{
        console.log("user does not exist");
        //res.send(JSON.stringify(users));
        }
    }
    
    
    
    



});
