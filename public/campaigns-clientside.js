function getSpecificCampaign() {
    console.log("Searching by campaign...");

    var title = $("#title").val();
    console.log("campaign: " + title);

    $('#ulCampaigns').html('');

    $.get("/getSpecificCampaign", { title: title }, function (data) {
        console.log("Back from the server with:");
        console.log(data);

        $('#ulCampaigns').html('<h2>Search Results</h2>');

        for (var i = 0; i < data.list.length; i++) {
            var campaign = data.list[i];

            $("#ulCampaigns").append("<li><a href=" + campaign.url + ">" + campaign.title + "</a></li><br>");
        }
    });
}

function whatsFree() {
    console.log("Getting all free campaigns");

    $('#ulCampaigns').html('');

    $.get("/searchByFree", function (data) {
        console.log("Back from the server with:");
        console.log(data);

        $('#ulCampaigns').html('<h2>Campaigns you can download for free</h2>');

        for (var i = 0; i < data.list.length; i++) {
            var campaign = data.list[i];

            $("#ulCampaigns").append("<li><a href=" + campaign.url + ">" + campaign.title + "</a></li><br>");
        }
    });
}

function whatsPaid() {
    console.log("Getting all paid campaigns");

    $('#ulCampaigns').html('');

    $.get("/searchByPaid", function (data) {
        console.log("Back from the server with:");
        console.log(data);

        $('#ulCampaigns').html('<h2>Campaigns you can buy</h2>');

        for (var i = 0; i < data.list.length; i++) {
            var campaign = data.list[i];

            $("#ulCampaigns").append("<li><a href=" + campaign.url + ">" + campaign.title + "</a></li><br>");
        }
    });
}

function addCampaignToDb() {
    var title = $("#title").val();
    var url = $("#url").val();
    var isFree;
    if ($("input[type=checkbox]").is(":checked")) {
        isFree = true;
    } else {
        isFree = false;
    }

    $.post("/insertCampaign",{title:title, url:url, isFree:isFree}, function(data) {
        console.log("Successfully added campaign");
    });
}