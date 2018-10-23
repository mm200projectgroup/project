const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('./dbconnect').db; //database
const bcrypt = require('bcryptjs');




router.post("/login/", async function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let query = `SELECT *
	FROM public."users" WHERE username = '${username}'`;
    
    try {
        let datarows = await db.any(query);
        console.log(datarows);
        let nameMatch = datarows.length == 1 ? true : false;
        if (nameMatch == true) {
            let passwordMatch = bcrypt.compareSync(password, datarows[0].hash);
            if (nameMatch, passwordMatch) {
                res.status(200).json({
                    mld: "Hello, " + username,
                    username: username
                });
            }
        } else {
            res.status(401).json({
                mld: "Feil brukernavn eller passord"
            });

        }

    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!
    }


});





router.post("/register/", async function (req, res) {
    let userEmail = req.body.email;
    let userName = req.body.username;
    let password = req.body.password;
    let hashPassw = bcrypt.hashSync(password, 10);

    let query = `INSERT INTO public."users" ("id", "email", "username", "hash") VALUES (DEFAULT, '${userEmail}', '${userName}', '${hashPassw}') RETURNING "id", "email", "username", "hash"`;
    
    

    

    try {
        let code = db.any(query) ? 200 : 500;
        res.status(code).json({}).end()

    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!     
    }

});




router.post("/changePass/", async function (req, res) {

    let changePass = req.body;

    //let sql = `SELECT * FROM users WHERE loginname='${login.username}'`;


    try {

        let datarows = await db.any(sql);

        console.log(datarows);


        if (datarows.length <= 0) {
            res.status(401).send("Feil brukernavn eller passord");
            return;

        }

        let user = await datarows.find(user => {
            return login.username === user.loginname;
        });


        let passwordMatch = await bcrypt.compareSync(login.password, user.password);


        if (user && passwordMatch) {
            //we have a valid user -> create the token        
            let payload = {
                username: datarows.loginname,
                fullname: datarows.fullname
            };
            let tok = await jwt.sign(payload, secret, {
                expiresIn: "12h"
            });

            //send logininfo + token to the client
            res.status(200).json({
                username: user.loginname,
                fullname: user.fullname,
                token: tok
            });

        } else {
            res.status(401).send("Feil brukernavn eller passord");
        }

    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!
    }


});



//export module -------------------------------------
module.exports = router;