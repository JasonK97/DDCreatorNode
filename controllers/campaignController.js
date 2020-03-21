const campaignModel = require("../models/campaignModel.js");

function searchCampaign(req, res) {
    var campaign = req.query.campaign;

    campaignModel.searchByCampaign(campaign, function(error, results) {
        // if (error || results == null || results.length != 1) {
        //     res.status(500).json({success:false, data: error});
        // } else {
            res.json(results);
        //}
    });
}

function getCampaign(req, res) {
    var id = req.query.id;

    console.log("Getting Campaign #" + id);

    campaignModel.getCampaignById(function(error, results) {
        // if (error || results == null || results.length != 1) {
        //     res.status(500).json({success:false, data: error});
        // } else {
            res.json(results);
        //}
    });
}

function getCampaignList(req, res) {
    console.log("Getting all Campaigns...");

    campaignModel.getCampaignList(function(error, results) {
        // if (error || results == null || results.length != 1) {
        //     res.status(500).json({success:false, data: error});
        // } else {
            res.json(results);
        //}
    });
}

function insertNewCampaign(req, res) {
    var title = req.body.title;

    console.log("Creating a new campaign: " + title);

    characterModel.postNewCampaign(title, function(error, results) {
        // if (error || results == null || results.length != 1) {
        //     res.status(500).json({success:false, data: error});
        // } else {
            res.json(results);
        //}
    });
}

function assignCampaignToCharacter(req, res) {
    var characterId = req.query.ch_name;
    var campaignId = req.query.title;

    campaignModel.assignCampaignToCharacter(characterId, campaignId, function(results) {
        // if (error || results == null || results.length != 1) {
        //     res.status(500).json({success:false, data: error});
        // } else {
            res.json(results);
        //}
    });
}

module.exports = {
    searchCampaign: searchCampaign,
    getCampaign: getCampaign,
    getCampaignList: getCampaignList,
    insertNewCampaign: insertNewCampaign,
    assignCampaignToCharacter: assignCampaignToCharacter
};