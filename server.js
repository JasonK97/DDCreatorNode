var express = require("express");
var app = express();
require('dotenv').config();

const campaignController = require("./controllers/campaignController.js");

var session = require("express-session");

// set up sessions
app.use(session({
  secret: "my-secret",
  resave: false,
  saveUninitialized: true
}));

app.use(express.static("public"));
app.use(express.json()); //support json encoded bodies
app.use(express.urlencoded({extended: true})); //support url encoded bodies
//app.use(campainController.logRequest);

app.set("port", (process.env.PORT || 5000));

app.get("/getCampaigns", campaignController.getCampaignList);
app.get("/getSpecificCampaign", campaignController.getSpecificCampaign);
app.get("/searchByFree", campaignController.searchByFree);
app.get("/searchByPaid", campaignController.searchByPaid);

app.post("/login", campaignController.handleLogin);
app.post("/logout", campaignController.handleLogout);
app.post("/insertCampaign", campaignController.insertCampaign);

app.listen(app.get("port"), function() {
    console.log("Now listening on port: ", app.get("port"));
});