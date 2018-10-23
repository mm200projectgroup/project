const {
    Client
} = require('pg');
const connectionString = process.env.DATABASE_URL;


const db = {}
let lastError = null;


db.lastError = function(){
    let err = lastError;
    lastError = null;
    return err;
};

function runQuery(query) {
    let respons = null;
    const client = new Client({
        connectionString: connectionString
    })

    try {
        client.connect()
        if (client) {
            respons = await client.query(query);/* (err, res) => {
                //console.log(res.rows)
                respons = res.rows;
                 console.log(`1 \n   ${respons}`);
                client.end()
            })*/

        };
    } catch (e) { 
        lastError = e;
    }

    
    console.log(`rESPONS \n   ${respons}`);
    
    return respons;
}
db.insert = function (query) {
    return runQuery(query);
}

db.select = function (query) {
    return runQuery(query);
}

db.delete = function (query) {
    //db.update(query);
    return runQuery(query);
}

db.update = function (query) {
    return runQuery(query);
}

module.exports = db