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

function upgText(x) {
    let data = player.upgrades[x]
    let text = "<b>" + data.title + "</b><br>" + data.description
    if (hasUpgrade(x)) {
        text = text + "<br>Bought!"
    }
    else {
        text = text + "<br>Cost: " + data.cost + data.resShow
    }
}
