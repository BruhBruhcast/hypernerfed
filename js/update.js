function pointDisplay() {
    document.getElementById("ptamt").innerHTML = player.basePoints + " base points (" + getBasePointGen() + "/s), which become " + player.points + " points"
    let sc = ""
    if (getBasePointGen().gt(softcapStart(1))) {
        sc = sc + softcapDesc(1)
    }
    document.getElementById("softcaps").innerHTML = sc
}

function tabDisplay() {
    let disp = document.getElementById("tab" + x).style.display
    if (misc.tabs[x].shown() == true) {
        disp = "block"
    }
    else {disp = "none"}
    disp = document.getElementById(x + "subtab" + y).style.display
    if (misc.tabs[x].subtabs[y].shown() == true) {
        disp = "block"
    }
    else {disp = "none"}
}

function upgDisplay(x) {
    let text = ""
    if (player.upgrades[x].title) {text = text + "<b>" + player.upgrades[x].title + "</b><br>"}
    text = text + player.upgrades[x].description
    if (hasUpgrade(x)) {
        text = text + "<br>Bought!"
    }
    else {
        text = text + "<br>Cost: " + player.upgrades[x].cost + " points<br>(Requires " + player.gainSlog.tetrate(player.gainLog.pow(player.upgrades[x].cost)) + " base points)"
    }
    text = text + "<br>" + player.upgrades[x].effDescription()
    document.getElementById("upg" + x).innerHTML = text
    document.getElementById("upg" + x).setAttribute("onclick", "buyUpgrade(" + x + ")")
    if (player.upgrades[x].shown == true) {
        document.getElementById("upg" + x).style.display = "none"
    }
    else {
        document.getElementById("upg" + x).style.display = "block"
    }
}

var updateNumbers = window.setInterval(function() {
    player.basePoints = player.basePoints.add(getBasePointGen().mul(33/1000))
    player.points = player.basePoints.slog(player.gainSlog).log(player.gainLog).max(0)
    if (player.basePoints.lte(1)) {
        player.points = Dec(0)
    }
}, 33)

var updateText = window.setInterval(function() {
    pointDisplay()
    upgDisplay(11)
    upgDisplay(12)
    upgDisplay(13)
    upgDisplay(14)
    upgDisplay(15)
    upgDisplay(21)
    upgDisplay(22)
    upgDisplay(23)
    upgDisplay(24)
    upgDisplay(25)
    upgDisplay("unl1")
}, 33)
