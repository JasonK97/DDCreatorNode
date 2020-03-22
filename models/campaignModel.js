const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString: connectionString });

function getAllCampaigns(callback) {
    var sql = "SELECT * FROM campaign";

    pool.query(sql, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            var results = {
                list: db_results.rows
            };
            callback(null, results);
        }
    })
}

function getCampaign(title, callback) {
    var sql = "SELECT * FROM campaign WHERE title=$1::text";
    var params = [title];

    pool.query(sql, params, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            var results = {
                list: db_results.rows
            };
            callback(null, results);
        }
    })

}

function isCampaignFree(callback) {
        var sql = "SELECT * FROM campaign WHERE isFree = true";

        pool.query(sql, function (err, db_results) {
            if (err) {
                throw err;
            } else {
                var results = {
                    list: db_results.rows
                };
                callback(null, results);
            }
        })
}

function isCampaignPaid(callback) {
    var sql = "SELECT * FROM campaign WHERE isFree = false";

    pool.query(sql, function (err, db_results) {
        if (err) {
            throw err;
        } else {
            var results = {
                list: db_results.rows
            };
            callback(null, results);
        }
    })
}

function insertNewCampaign(title, url, callback) {
    var results = { success: true, campaign: { id: 1, title: title, url: url } }

    callback(null, results);
}

module.exports = {
    getAllCampaigns: getAllCampaigns,
    getCampaign: getCampaign,
    isCampaignFree: isCampaignFree,
    isCampaignPaid: isCampaignPaid,
    insertNewCampaign: insertNewCampaign
}