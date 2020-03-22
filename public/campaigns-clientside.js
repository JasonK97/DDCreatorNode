function getSpecificCampaign() {
    console.log("Searching by campaign...");

    var title = $("#title").val();
    console.log("campaign: " + title);

     $.get("/getSpecificCampaign", {title:title}, function(data) {
        console.log("Back from the server with:");
        console.log(data);

        for (var i = 0; i < data.list.length; i++) {
			var campaign = data.list[i];

			$("#ulCampaigns").append("<li>" + campaign.title + " is a free campaign you can download here: " + campaign.url + "</li>");
		}
    });
}

function searchByCampaign() {
    console.log("Searching by Campaign...");
}