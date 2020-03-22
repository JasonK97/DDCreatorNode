function getSpecificCampaign() {
    console.log("Searching by campaign...");

    var title = $("#title").val();
    console.log("campaign: " + title);

    $('#ulCampaigns').html('');

    $.get("/getSpecificCampaign", {title:title}, function(data) {
        console.log("Back from the server with:");
        console.log(data);

        $('#ulCampaigns').html('<h2>Results</h2>');

        for (var i = 0; i < data.list.length; i++) {
			var campaign = data.list[i];

			$("#ulCampaigns").append("<li>" + campaign.title + " is a free campaign you can download here: <a href=" + campaign.url +">" + campaign.title + "</a></li><br>");
		}
    });
}

function whatsFree() {
    console.log("Getting all free campaigns");

    $('#ulCampaigns').html('');

    $.get("/searchByFree", function(data) {
        console.log("Back from the server with:");
        console.log(data);

        $('#ulCampaigns').html('<h2>Results</h2>');

        for (var i = 0; i < data.list.length; i++) {
			var campaign = data.list[i];

			$("#ulCampaigns").append("<li>" + campaign.title + " is a free campaign you can download here: <a href=" + campaign.url +">" + campaign.title + "</a></li><br>");
		}
    });
}

function whatsPaid() {
    console.log("Getting all free campaigns");

    $('#ulCampaigns').html('');

    $.get("/searchByPaid", function(data) {
        console.log("Back from the server with:");
        console.log(data);

        $('#ulCampaigns').html('<h2>Results</h2>');

        for (var i = 0; i < data.list.length; i++) {
			var campaign = data.list[i];

			$("#ulCampaigns").append("<li>" + campaign.title + " is a campaign that you can buy here: <a href=" + campaign.url +">" + campaign.title + "</a></li><br>");
		}
    });
}