const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL; // || "postgres://jasonk97:jasonkent@localhost:5432/ddcreator";
const pool = new Pool({connectionString: connectionString});

function searchByCharacter(character, callback) {
    console.log("Searching the DB for character: " + character)

	var sql = "SELECT id, ch_name, ch_level, ch_race, ch_class FROM character WHERE ch_name=$1::text";
	var params = [character];

	pool.query(sql, params, function(err, db_results) {

		if (err) {
			throw err;
		} else {
			var results = {
					success:true,
					list:db_results.rows
				};

			callback(null, results);		
		}
	});
}

function getCharacterFromDb (characterId, callback) {
    console.log("getCharacterFromDb called with id: ", characterId);

    var sql = "SELECT * FROM character WHERE id = $1::int";
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

function getAllCharacters(callback) {
    //TODO: Fix this function!!!

    var sql = "SELECT * FROM character";
    var params = [characterId];

    pool.query(sql, params, function(err, results) {
        if (err) {
            console.log("An unexpected error occurred.");
            console.log(err);
            callback(err, null);
        }

        console.log("Found DB results: " + JSON.stringify(results));

        callback(null, results);
    });
}

function postNewCharacter(ch_name, ch_level, ch_race, ch_class, callback) {
    //Create new topic with given name

    var results = {success:true,
        character:{id:1, ch_name: ch_name, ch_level: ch_level, ch_race: ch_race, ch_class: ch_class}};

    callback(null, results);

}

module.exports = {
    searchByCharacter: searchByCharacter,
    getCharacterFromDb: getCharacterFromDb,
    getAllCharacters: getAllCharacters,
    postNewCharacter: postNewCharacter
}