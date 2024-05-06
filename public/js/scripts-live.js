var socket = io();

/*
function emitPlayerHPUpdate(playerNumber, newValue) {
    socket.emit('update', ["HP", playerNumber, newValue]);
}

function emitPlayerNameUpdate(playerNumber, newName) {
    socket.emit('update', ["Name", playerNumber, newName]);
}

function emitPlayerTTSStringUpdate(playerNumber, newTTSString) {
    socket.emit('update', ["TTSString", playerNumber, newTTSString]);
}

function emitPlayerPilotUpdate(playerNumber, newPilotName) {
    socket.emit('update', ["Pilot", playerNumber, newPilotName]);
}

function emitTogglePilotCard(pilotName) {
    socket.emit('update', ["TogglePilotCard", 1, pilotName]);
}

function emitToggleBattleCard(cardName) {
    socket.emit('update', ["ToggleBattleCard", 2, cardNumber]);
}
*/

var cardImgModal = document.getElementById("cardImageModal");

socket.on('update', function (update) {
    console.log("Received update:", update);
    var command = update[0];
    var playerNumber = update[1];
    switch (command) {
        case "HP":
            var targetElementId = "hpLabelPlayer" + playerNumber;
            document.getElementById(targetElementId).innerText = "HIT POINTS: " + update[2];
            break;
        case "Name":
            var targetElementId = "playerNameSpan" + playerNumber;
            document.getElementById(targetElementId).innerText = update[2];
            break;
        case "Pilot":
            var targetElementId = "playerPilotElement" + playerNumber;
            document.getElementById(targetElementId).innerText = update[2];
            updatePlayerPilotCard(playerNumber);
            break;
        case "TogglePilotCard":
            var pilotNameElement = "playerPilotElement" + playerNumber;
            var selectedPilotName = document.getElementById(pilotNameElement).innerText.trim();
            var newPilotImgURL = getPilotImgURLForPilotName(selectedPilotName);
            var cardImgElement = document.getElementById("cardImage" + playerNumber);
            cardImgElement.src = newPilotImgURL;
            $('#cardImageModal' + playerNumber).modal('show');
            break;
        case "ToggleSmallPilotCard":
            var pilotCardImageElement = document.getElementById("pilotCardImgPlayer" + playerNumber);
            var newVisibility = "visible"
            if (pilotCardImageElement.style.visibility == newVisibility) {
                newVisibility = "hidden";
            }
            console.log("Setting visibility for " + pilotCardImageElement.id);
            pilotCardImageElement.style.visibility = newVisibility;
            break;
        case "TTSString":
            var targetElementId = "playerPilotElement" + playerNumber;
            var cardArray = update[2].split("\\ ");
            console.log(cardArray);
            var pilotCode = cardArray.filter((cardCode) => cardCode.startsWith("AEF0"))[0].trim();
            var selectedPilotName = convertPilotCodeToPilotName(pilotCode);
            console.log("New pilot name: ", selectedPilotName);
            document.getElementById(targetElementId).innerText = selectedPilotName;
            updatePlayerPilotCard(playerNumber);
            break;
        case "ToggleBattleCard":
            console.log("Received new battle card image: ", update[2]);
            var cardImgElement = document.getElementById("cardImage" + playerNumber);
            cardImgElement.src = update[2];
            $('#cardImageModal' + playerNumber).modal('show');
            break;
        case "HideCurrentlyShownCard1":
            console.log("Hiding modal for card");
            $('#cardImageModal' + playerNumber).modal('hide');
            break;
        case "HideCurrentlyShownCard2":
            console.log("Hiding modal for card");
            $('#cardImageModal' + playerNumber).modal('hide');
            break;
    }
});

// When the select changes, update the player pilot card
function updatePlayerPilotCard(playerNumber) {

    // Figure out which player we're updating
    var pilotNameElement = "playerPilotElement" + playerNumber;
    var pilotImgElementId = "pilotCardImgPlayer" + playerNumber;

    console.log("Updating " + pilotImgElementId);

    // Get the selected pilot
    var selectedPilotName = document.getElementById(pilotNameElement).innerText.trim();
    console.log("New pilot selection: " + selectedPilotName);

    // Figure out the new URL for the pilot image
    var newPilotImgURL = getPilotImgURLForPilotName(selectedPilotName);

    // Apply this new URL to the img element
    console.log("Applying new URL for that pilot: " + newPilotImgURL);
    document.getElementById(pilotImgElementId).src = newPilotImgURL;

}

// Get the pilot image card based on the pilot name
function getPilotImgURLForPilotName(selectedPilotName) {
    var newPilotImgURL = "";
    var PILOT_IMAGE_URL_PREFIX = BUILDER_IMAGES_URL_PREFIX + "pilots/";
    console.log("Looking up pilot image for selected pilot", selectedPilotName);
    switch (selectedPilotName) {
        case "Jax Fernandez":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF005.png";
            break;
        case "Lt. Archie Anderson":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF002.png";
            break;
        case "Van Vertigo":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF015.png";
            break;
        case "TSGT. Hilda McMahon":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF012.png";
            break;
        case "Fare Collins":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF007.png";
            break;
        case "Lt. Sven Bergman":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF004.png";
            break;
        case "1st Lt. Havoc Moua":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF010.png";
            break;
        case "Ash Buchanan":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF013.png";
            break;
        case "Lance Hamill":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF008.png";
            break;
        case "Capt. Theodosia Costello":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF001.png";
            break;
        case "1st Lt. Dane X":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF011.png";
            break;
        case "Dario Stardancer":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF014.png";
            break;
        case "Elena Zane":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF006.png";
            break;
        case "Lt. Sophia Saleh":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF003.png";
            break;
        case "Capt. Alice Drummond":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF009.png";
            break;
        case "B3-47L":
            newPilotImgURL = PILOT_IMAGE_URL_PREFIX + "AEF016.png";
            break;
        default:
            newPilotImgURL = "Aerodome-Logo-800.png";
    }
    return newPilotImgURL;
}