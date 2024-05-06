var socket = io();



socket.on('update', function (update) {
    console.log('Socket update received from settings page: ', update);
});

function emitPlayerHPUpdate(playerNumber, newValue) {
    socket.emit('update', ["HP", playerNumber, newValue]);
}

function emitPlayerNameUpdate(playerNumber, newName) {
    socket.emit('update', ["Name", playerNumber, newName]);
}

function emitPlayerTTSStringUpdate(playerNumber) {

    var newTTSString = document.getElementById("TTSStringInputPlayer" + playerNumber).value;

    var cardArray = newTTSString.split("\\ ");
    var battleCardArray = cardArray.filter((cardCode) => cardCode.startsWith("RH1"));
    console.log("Player " + playerNumber + " battle card deck: ", battleCardArray);

    var pilotCode = cardArray.filter((cardCode) => cardCode.startsWith("AEF0"))[0].trim();
    var selectedPilotName = convertPilotCodeToPilotName(pilotCode);
    document.getElementById("pilotSelectPlayer" + playerNumber).value = selectedPilotName;

    for (var i = 1; i < 10; i++) {
        var battleCardCode = battleCardArray[i - 1].replace("\\", "").replace("\\", "");
        var battleCardBtnElementId = "battleCard" + i + "Player" + playerNumber;
        document.getElementById(battleCardBtnElementId).innerText = battleCardCode;

        var battleCardShowButtonElementId = "battleCard" + i + "ShowButtonPlayer" + playerNumber;
        var battleCardImgURL = BUILDER_IMAGES_URL_PREFIX + "battle/" + battleCardCode + ".png";
        document.getElementById(battleCardShowButtonElementId).setAttribute("onClick", "emitToggleBattleCard('" + battleCardImgURL + "'," + playerNumber + ");");
    }


    socket.emit('update', ["TTSString", playerNumber, newTTSString]);
}

function emitPlayerPilotUpdate(playerNumber, newPilotName) {
    socket.emit('update', ["Pilot", playerNumber, newPilotName]);
}

function emitTogglePilotCard(playerNumber) {
    socket.emit('update', ["TogglePilotCard", playerNumber, document.getElementById("pilotSelectPlayer" + playerNumber).value]);
}

function emitToggleSmallPilotCard(playerNumber) {
    socket.emit('update', ["ToggleSmallPilotCard", playerNumber, ""]);
}

function emitToggleBattleCard(battleCardImgURL, playerNumber) {
    socket.emit('update', ["ToggleBattleCard", playerNumber, battleCardImgURL]);
}

function emitHideCurrentlyDisplayedCard(playerNumber) {
    socket.emit('update', ["HideCurrentlyShownCard" + playerNumber, playerNumber, ""]);
}
