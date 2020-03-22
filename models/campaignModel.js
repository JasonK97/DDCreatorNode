const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

function getAllCampaigns(callback) {
    var results = {list: [{id:1, title:"Quest for your mom", url: "url.com/campaign", isFree:true},
    {id:2, title:"Quest for your dad", url: "url.com/campaign", isFree:true},
    {id:3, title:"Quest for your brother", url: "url.com/campaign", isFree:true}]};

    callback(null, results);
}

function getCampaign(title, callback) {
    var sql = "SELECT * FROM campaign";

    pool.query(sql, function(err, db_results) {
        if(err) {
            throw err;
        } else {
            //Successful results from db.
            console.log("Back with results from the db:");
            console.log(db_results);

            var results = db_results;
            callback(null, results);
        }
    })

}

function isCampaignFree(isFree, callback) {
    var results = {id:2, title:"Quest for your dad", url:"url.com/campaign", isFree:isFree}
    
    callback(null, results);
}

function insertNewCampaign(title, url, callback) {
    var results = {success:true, campaign:{id:1, title:title, url:url}}

    callback(null, results);
}

module.exports = {
    getAllCampaigns: getAllCampaigns,
    getCampaign: getCampaign,
    isCampaignFree: isCampaignFree,
    insertNewCampaign: insertNewCampaign
}