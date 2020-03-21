var express = require("express");
var app = express();

const characterController = require("./controllers/characterController.js");
const campaignController = require("./controllers/campaignController.js");

app.use(express.static("./public"));
app.use(express.json()); //support json encoded bodies
app.use(express.urlencoded({extended: true})); //support url encoded bodies

app.set("port", (process.env.PORT || 5000));

app.get("/searchByCharacter", characterController.searchByCharacter);
app.get("/getCharacter", characterController.getCharacter);
app.get("/getCharacters", characterController.getCharacterList);
app.post("/insertCharacter", characterController.insertNewCharacter);

app.get("/searchByCampaign", campaignController.searchByCampaign);
app.get("/getCampaign", campaignController.getCampaign);
app.get("/getCampaigns", campaignController.getCampaignList);
app.post("/insertCampaign", campaignController.insertNewCampaign);
app.post("/assignCampaignToCharacter", campaignController.assignCampaignToCharacter);

app.listen(app.get("port"), function() {
    console.log("Now listening on port: ", app.get("port"));
});