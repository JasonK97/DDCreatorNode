const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL; // || "postgres://jasonk97:jasonkent@localhost:5432/ddcreator";
const pool = new Pool({connectionString: connectionString});

function searchByCampaign(campaign, callback) {
    console.log("Searching the DB for campaign: " + campaign)

	var sql = "SELECT id, title FROM campaign WHERE title=$1::text";
	var params = [campaign];

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

function getCampaignById(id, callback) {
    var results = {id:1, title:"Scourge of the Howling Horde"};

    callback(null, results);
}

function getAllCampaigns(callback) {
    var results = {list: [{id:1, title:"Scourge of the Howling Horde"},
                        {id:2, title:"Caves of Shadow"},
                        {id:3, title:"Barrow of the Forgotten King"}
                    ]
                }

    callback(null, results);
}

function postNewCampaign(title, callback) {
    var results = {success:true,
                    campaign:{id:1, title: title}
                };

    callback(null, results);
}

function assignCampaignToCharacter(characterId, campaignId, callback) {
    var results = {success: true};

    callback(null, results);
}

module.exports = {
    searchByCampaign: searchByCampaign,
    getCampaignById: getCampaignById,
    getAllCampaigns: getAllCampaigns,
    postNewCampaign: postNewCampaign,
    assignCampaignToCharacter: assignCampaignToCharacter
};