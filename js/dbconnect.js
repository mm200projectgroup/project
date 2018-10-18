const pgp = require('pg-promise')();
//db connect string
const db = pgp(process.env.DATABASE_URL);


//export module
module.exports.db = db; //db connection