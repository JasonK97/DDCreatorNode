var express = require("express");
var app = express();

const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL || "postgres://jasonk97:jasonkent@localhost:5432/ddcreator";
const pool = new Pool({connectionString: connectionString});

app.set("port", (process.env.PORT || 5000));

app.get("/getCharacter", getCharacter);

app.listen(app.get("port"), function() {
    console.log("Now listening on port: ", app.get("port"));
});

function getCharacter(req, res) {
    console.log("Getting character information");

    var characterId = req.query.characterId;
    console.log("Retrieving character with id: ", characterId);

    getCharacterFromDb(characterId, function(error, result) {

        if (error || result == null || result.length != 1) {
            res.status(500).json({success:false, data: error});
        } else {
            //console.log("Back from the function with result: ", result);
            res.json(result[0]);
        }
    });
}

function getCharacterFromDb (characterId, callback) {
    console.log("getCharacterFromDb called with id: ", characterId);

    var sql = "SELECT id, ch_name, ch_level FROM character WHERE id = $1::int";
    var params = [characterId];

    pool.query(sql, params, function(err, result) {
        if (err) {
            console.log("An unexpected error occurred.");
            console.log(err);
            callback(err, null);
        }

        console.log("Found DB result: " + JSON.stringify(result.rows));

        callback(null, result.rows);
    });
}