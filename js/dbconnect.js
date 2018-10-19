const pgp = require('pg-promise')();
//db connect string
const db = pgp("postgres://postgres:Teab83224390@localhost:5432/innafor");




//export module
module.exports.db = db; //db connection
