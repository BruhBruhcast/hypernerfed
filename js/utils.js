function updateBP() {
    player.basePoints = player.gainSlog.tetrate(player.gainLog.pow(player.points))
}

function softcapStart(x) {
    return player.gainSoftcaps[x].start()
}

function softcapEffect(x) {
    return player.gainSoftcaps[x].effect()
}

function softcapDesc(x) {
    return player.gainSoftcaps[x].description()
}

function hasUpgrade(x) {
    return (player.upgrades[x].bought)
}

function buyUpgrade(x) {
    let cost = player.upgrades[x].cost
    if (player.points.gte(cost)) {
        player.upgrades[x].bought = true
        player.points = player.points.sub(cost)
        updateBP()
    }
}

function upgEff(x) {
    return (player.upgrades[x].effect())
}



