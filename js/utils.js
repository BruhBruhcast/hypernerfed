function updateBP() {
    player.basePoints = player.gainSlog.tetrate(player.gainLog.pow(player.points))
}

function showTab(x, y) {
    misc.tabs[!x].shown() = false
    misc.tabs[x].shown() = true
    misc.tabs[x].subtabs[!y].shown() = false
    misc.tabs[x].subtabs[y].shown() = true
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

Decimal.prototype.softcap = function(id, type, strength) {
    let x = this
    let start = softcapStart(id)
    let effect = softcapEffect(id)
    effect = effect.pow(strength)
    if (x.gte(start)) {
        if ([0, "mul"].includes(type)) x = x.sub(start).div(effect).add(start)
        if ([1, "pow"].includes(type)) x = x.div(start).pow(effect).mul(start)
    }
    return x
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