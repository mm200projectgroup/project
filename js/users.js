const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('./db.js').db;



router.post('/app/users/login', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let query = `SELECT *
	FROM public."Users" WHERE username = '${username}'`;

    let users = db.select(query);


    try {
        
        console.log(users);

       /* let user = users.find(user => {
            return users
        });*/
        
        
        
        let nameMatch = user.username === username ? true : false;
        let passwordMatch = bcrypt.compareSync(password, user.hash);

        if (nameMatch && passwordMatch) {
            console.log("hello " + user.username);
        } else {
            res.status(401).json(console.log("Feil brukernavn eller passord")).end()
        }

    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!
    }


});



router.post('/app/users/reg', function (req, res, next) {
    let userEmail = req.body.email;
    let userName = req.body.username;
    let password = req.body.password;
    let hashPassw = bcrypt.hashSync(password, 10); //hash the password    
    let query = `INSERT INTO public."Users"(
    email, username, hash)
	VALUES ('${userEmail}', '${userName}', '${hashPassw}') RETURNING "id", "email", "username", "hash"`;

    try {
        let code = db.insert(query) ? 200 : 500;
        res.status(code).json({}).end()

    } catch (err) {
        res.status(500).json({
            error: err
        }); //something went wrong!     
    }


});





module.exports = router;