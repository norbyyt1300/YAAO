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
    var selectedPilot = document.getElementById(selectElementId).value;
    console.log("New pilot selection: " + selectedPilot);

    // Figure out the new URL for the pilot image
    var newPilotImgURL = "";
    switch (selectedPilot) {
        case "Jax Fernandez":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF005.png";
            break;
        case "Lt. Archie Anderson":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF002.png";
            break;
        case "Van Vertigo":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF015.png";
            break;
        case "TSGT. Hilda McMahon":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF012.png";
            break;
        case "Fare Collins":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF007.png";
            break;
        case "Lt. Sven Bergman":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF004.png";
            break;
        case "1st Lt. Havoc Moua":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF010.png";
            break;
        case "Ash Buchanan":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF013.png";
            break;
        case "Lance Hamill":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF008.png";
            break;
        case "Capt. Theodosia Costello":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF001.png";
            break;
        case "1st Lt. Dane X":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF011.png";
            break;
        case "Dario Stardancer":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF014.png";
            break;
        case "Elena Zane":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF006.png";
            break;
        case "Lt. Sophia Saleh":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF003.png";
            break;
        case "Capt. Alice Drummond":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF009.png";
            break;
        case "B3-47L":
            newPilotImgURL = "https://www.aerodomebuilder.com/images/pilots/AEF016.png";
            break;
        default:
            newPilotImgURL = "Aerodome-Logo-800.png";
    }

    

    // Apply this new URL to the img element
    console.log("Applying new URL for that pilot: " + newPilotImgURL);
    document.getElementById(pilotImgElementId).src = newPilotImgURL;

}