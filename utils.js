

function hasUpgrade(x) {
    return (player.upgrades[x].bought)
}

function buyUpgrade(x) {
    let cost = player.upgrades[x].cost
    if (player.points.gte(cost)) {
        player.upgrades[x].bought = true
    }
}

function upgDisplay(x) {
    let text = "<b>" + player.upgrades[x].title + "</b><br>" + player.upgrades[x].description
    if (hasUpgrade(x)) {
        text = text + "<br>Bought!"
    }
    else {
        text = text + "<br>Cost: " + player.upgrades[x].cost + " points<br>(Requires " + player.gainSlog.tetrate(player.gainLog.pow(player.upgrades[x].cost)) + " base points)"
    }
    document.getElementById("upg" + x).innerHTML = text
    document.getElementById("x").setAttribute("onclick", "buyUpgrade(" + x + ")")
}


