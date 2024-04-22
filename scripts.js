// -----------------------------------------------------------------------------------------------------

// When a pilot card img is clicked, either make it very transparent or not very transparent
function togglePilotCardImgTransparency(element) {
    // Assume a default should be 0.9
    var newOpacity = 0.9;  
    if (element.style.opacity == 0.9) {
        newOpacity = 0.1
    }
    console.log("Setting the opacity for " + element.id + " to " + newOpacity);
    element.style.opacity = newOpacity;
}

// -----------------------------------------------------------------------------------------------------

// When the select changes, update the player pilot card
function updatePlayerPilotCard(playerNumber) {

    // Figure out which player we're updating
    var selectElementId = "player1PilotSelect";
    var pilotImgElementId = "player1PilotCardImg";
    if (playerNumber == 2) {
        selectElementId = "player2PilotSelect";
        pilotImgElementId = "player2PilotCardImg";
    }

    console.log("Updating " + pilotImgElementId + " based on change to " + selectElementId);

    // Get the selected pilot
    var selectedPilot = document.getElementById(selectElementId).value.trim();
    console.log("New pilot selection: " + selectedPilot);

    // Figure out the new URL for the pilot image
    var newPilotImgURL = "";

    // Thank you, builder, for hosting all of these!
    var IMAGE_SOURCE_PREFIX = "https://www.aerodomebuilder.com/images/pilots/";

    switch (selectedPilot) {
        case "Jax Fernandez":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF005.png";
            break;
        case "Lt. Archie Anderson":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF002.png";
            break;
        case "Van Vertigo":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF015.png";
            break;
        case "TSGT. Hilda McMahon":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF012.png";
            break;
        case "Fare Collins":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF007.png";
            break;
        case "Lt. Sven Bergman":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF004.png";
            break;
        case "1st Lt. Havoc Moua":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF010.png";
            break;
        case "Ash Buchanan":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF013.png";
            break;
        case "Lance Hamill":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF008.png";
            break;
        case "Capt. Theodosia Costello":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF001.png";
            break;
        case "1st Lt. Dane X":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF011.png";
            break;
        case "Dario Stardancer":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF014.png";
            break;
        case "Elena Zane":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF006.png";
            break;
        case "Lt. Sophia Saleh":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF003.png";
            break;
        case "Capt. Alice Drummond":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF009.png";
            break;
        case "B3-47L":
            newPilotImgURL = IMAGE_SOURCE_PREFIX + "AEF016.png";
            break;
        default:
            newPilotImgURL = "Aerodome-Logo-800.png";
    }  

    // Apply this new URL to the img element
    console.log("Applying new URL for that pilot: " + newPilotImgURL);
    document.getElementById(pilotImgElementId).src = newPilotImgURL;

}

// -----------------------------------------------------------------------------------------------------

function parseAndApplyPlayerDecks() {
    console.log("Now parsing player decks!");

    // Read in each deck TTS string

    // Split the string into tokens

    // Extract from the tokens the pilot code

    // Use that pilot code to update the pilot name and pilot card image

    // For the rest of the cards, save them to an array

    // Update the card viewer to be able to show those cards

    // Also allow toggling a given card from normal to dazed
}