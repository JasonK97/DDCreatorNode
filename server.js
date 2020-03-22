var express = require("express");
var app = express();
require('dotenv').config();

const campaignController = require("./controllers/campaignController.js");

app.use(express.static("public"));
app.use(express.json()); //support json encoded bodies
app.use(express.urlencoded({extended: true})); //support url encoded bodies

app.set("port", (process.env.PORT || 5000));

app.get("/getCampaigns", campaignController.getCampaignList);
app.get("/getSpecificCampaign", campaignController.getSpecificCampaign);
app.get("/searchByFree", campaignController.searchByFree);
app.get("/searchByPaid", campaignController.searchByPaid);

app.post("/insertCampaign", campaignController.insertCampaign);

app.listen(app.get("port"), function() {
    console.log("Now listening on port: ", app.get("port"));
});