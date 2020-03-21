function searchByCharacter() {
    console.log("Searching by Character...");

    var character = $("#character").val();
    console.log("Character: " + character);

    $.get("/search", function(data) {
        console.log("Back from the server with:");
        console.log(data);

        for (var i = 0; i < data.list.length; i++) {
			var character = data.list[i];

			$("#ulCharacters").append("<li>" + character.ch_name + " is a level " + character.ch_level + ", " + character.ch_race + " " + character.ch_class + "</li>");
		}
    })
}

function searchByCampaign() {
    console.log("Searching by Campaign...");
}