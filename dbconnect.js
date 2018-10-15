const pgp = require('pg-promise')();
//db connect string
const db = pgp('postgres://postgres:Teab83224390@localhost:5432/innafor');

//prepared sql statements we are going to use
const PrpSt = require('pg-promise').PreparedStatement;
const ps = {}; //object that contains the statements




//export module
module.exports.db = db; //db connection
module.exports.ps = ps; //prepared sql statements