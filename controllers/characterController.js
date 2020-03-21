const characterModel = require("../models/characterModel.js");

function searchCharacter(req, res) {
    var character = req.query.character;

    campaignModel.searchByCharacter(character, function(error, results) {
        // if (error || results == null || results.length != 1) {
        //     res.status(500).json({success:false, data: error});
        // } else {
            res.json(results);
        //}
    });
}

function getCharacter(req, res) {
    console.log("Getting character information");

    var characterId = req.query.characterId;
    console.log("Retrieving character with id: ", characterId);

    characterModel.getCharacterFromDb(characterId, function(error, results) {
        if (error || results == null || results.length != 1) {
            res.status(500).json({success:false, data: error});
        } else {
            //console.log("Back from the function with result: ", result);
            res.json(results);
        }
    });
}

function getCharacterList(req, res) {
    console.log("Getting all characters...");

    characterModel.getAllCharacters(function(error, results) {
        // if (error || results == null || results.length != 1) {
        //     res.status(500).json({success:false, data: error});
        // } else {
            res.json(results);
        //}
    });
}

function insertNewCharacter(req, res) {
    var ch_name = req.body.ch_name;
    var ch_level = req.body.ch_level;
    var ch_class = req.body.ch_class;
    var ch_race = req.body.ch_race;

    console.log("Creating a new character with name: " + ch_name);

    characterModel.postNewCharacter(ch_name, ch_level, ch_race, ch_class, function(error, results){
        // if (error || results == null || results.length != 1) {
        //     res.status(500).json({success:false, data: error});
        // } else {
            res.json(results);
        //}
    });
}

module.exports = {
    getCharacter: getCharacter,
    getCharacterList: getCharacterList,
    insertNewCharacter: insertNewCharacter
}