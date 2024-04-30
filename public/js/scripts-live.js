// -----------------------------------------------------------------------------------------------------

var BUILDER_IMAGES_URL_PREFIX = "https://www.aerodomebuilder.com/images/";

// -----------------------------------------------------------------------------------------------------

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

function convertPilotCodeToPilotName(pilotCode) {
    switch (pilotCode) {
        case "AEF005":
            pilotName = "Jax Fernandez";
            break;

        case "AEF002":
            pilotName = "Lt. Archie Anderson";
            break;

        case "AEF015":
            pilotName = "Van Vertigo";
            break;

        case "AEF012":
            pilotName = "TSGT. Hilda McMahon";
            break;

        case "AEF007":
            pilotName = "Fare Collins";
            break;

        case "AEF004":
            pilotName = "Lt. Sven Bergman";
            break;

        case "AEF010":
            pilotName = "1st Lt. Havoc Moua";
            break;

        case "AEF013":
            pilotName = "Ash Buchanan";
            break;

        case "AEF008":
            pilotName = "Lance Hamill";
            break;

        case "AEF001":
            pilotName = "Capt. Theodosia Costello";
            break;

        case "AEF011":
            pilotName = "1st Lt. Dane X";
            break;

        case "AEF014":
            pilotName = "Dario Stardancer";
            break;

        case "AEF006":
            pilotName = "Elena Zane";
            break;

        case "AEF003":
            pilotName = "Lt. Sophia Saleh";
            break;

        case "AEF009":
            pilotName = "Capt. Alice Drummond";
            break;

        case "AEF016":
            pilotName = "B3-47L";
            break;
        default:
            pilotName = "Soontir Fel";
    }
    return pilotName;
}

// -----------------------------------------------------------------------------------------------------

// When the select changes, update the player pilot card
function updatePlayerBattleCard(playerNumber) {

    // Figure out which player we're updating
    var selectElementId = "player1BattleCardSelect";
    var battleCardImgElementId = "player1BattleCardImg";
    if (playerNumber == 2) {
        selectElementId = "player2BattleCardSelect";
        battleCardImgElementId = "player2BattleCardImg";
    }

    console.log("Updating " + battleCardImgElementId + " based on change to " + selectElementId);

    // Get the selected card CODE
    var selectedBattleCardCode = document.getElementById(selectElementId).value.trim();
    console.log("New battle card selection: " + selectedBattleCardCode);



    // Thank you, builder, for hosting all of these!
    var BATTLE_CARD_IMAGE_URL_PREFIX = BUILDER_IMAGES_URL_PREFIX + "battle/";

    // Figure out the new URL for the card image
    var newBattleCardImgURL = BATTLE_CARD_IMAGE_URL_PREFIX + selectedBattleCardCode + ".png";

    // Allow hiding
    if (selectedBattleCardCode == "...") {
        newBattleCardImgURL = "";
    }

    // Apply this new URL to the img element
    console.log("Applying new URL for that battle card: " + newBattleCardImgURL);
    document.getElementById(battleCardImgElementId).src = newBattleCardImgURL;

}