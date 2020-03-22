function getAllCampaigns(callback) {
    var results = {list: [{id:1, title:"Quest for your mom", url: "url.com/campaign", isFree:true},
    {id:2, title:"Quest for your dad", url: "url.com/campaign", isFree:true},
    {id:3, title:"Quest for your brother", url: "url.com/campaign", isFree:true}]};

    callback(null, results);
}

function getCampaign(title, callback) {
    var results = {list: []};

    callback(null, results);
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