const campaignModel = require("../models/campaignModel.js");

function getCampaignList(req, res) {
    console.log("Getting list of all campaigns in the database...");

    campaignModel.getAllCampaigns(function (error, results) {
        if (error == null) {
            res.json(results);
        }
    });
}

function getSpecificCampaign(req, res) {
    var title = req.query.title;

    console.log("Getting Specific Campaign..." + title);

    campaignModel.getCampaign(title, function (error, results) {
        if (error == null) {
            res.json(results);
        }
    });
}

function searchByFree(req, res) {
    
    campaignModel.isCampaignFree(function(error, results) {
        if (error == null) {
            res.json(results);
        }
    });
}

function searchByPaid(req, res) {
    
    campaignModel.isCampaignPaid(function(error, results) {
        if (error == null) {
            res.json(results);
        }
    });
}

function insertCampaign(req, res) {
    var title = req.body.title;
    var url = req.body.url;
    var isFree = req.body.isFree;

    console.log("Inserting new campaign...");

    campaignModel.insertNewCampaign(title, url, isFree, function(error, results) {
        if (error == null) {
            res.json(results);
        }
    })
}

function handleLogin(req, res) {
	var result = {success: false};

	if (req.body.username == "admin" && req.body.password == "password") {
		req.session.user = req.body.username;
		result = {success: true};
	}

	res.json(result);
}

function handleLogout(req, res) {
	var result = {success: false};

	if (req.session.user) {
		req.session.destroy();
		result = {success: true};
	}

	res.json(result);
}

function verifyLogin(req, res, next) {
	if (req.session.user) {
		next();
	} else {
		var result = {success:false, message: "Access Denied"};
		res.status(401).json(result);
	}
}

function logRequest(req, res, next) {
	console.log("Received a request for: " + req.url);

	next();
}

module.exports = {
    getCampaignList: getCampaignList,
    getSpecificCampaign: getSpecificCampaign,
    searchByFree: searchByFree,
    searchByPaid: searchByPaid,
    insertCampaign: insertCampaign,
    handleLogin: handleLogin,
    handleLogout: handleLogout,
    verifyLogin: verifyLogin,
    logRequest: logRequest
}