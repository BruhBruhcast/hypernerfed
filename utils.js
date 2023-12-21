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
