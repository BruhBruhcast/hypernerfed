function Dec(x) {
    return (new Decimal(x))
}

function hasUpgrade(x) {
    return (player.upgrades[x].bought)
}

function buyUpgrade(x) {
    let res = player.upgrades[x].resource
    let cost = player.upgrades[x].cost
    if (res.gte(cost)) {
        player.upgrades[x].bought = true
    }
}

function upgDisplay(x) {
    let text = "<b>" + player.upgrades[x].title + "</b><br>" + player.upgrades[x].description
    if (hasUpgrade(x)) {
        text = text + "<br>Bought!"
    }
    else {
        text = text + "<br>Cost: " + player.upgrades[x].cost + " points<br>(Requires " + player.upgrades[x].cost.pow(player.gainLog).tetrate(player.gainSlog) + " base points)"
    }
    let button = "<button>" + text + "</button>"
    return button
}
