var player = {
    points: Dec(0),
    basePoints: Dec(0),
    gainSlog: Dec(10),
    gainLog: Dec(10),
    upgrades: {
        11: {
            title: "Doubler",
            description: "Multiply point gain by 2",
            cost: Dec(0.1),
            shown() {
                return true
            },
            bought: false,
        },
        
    },
}

function getPointGen() {
    let gain = Dec(1)
    if (hasUpgrade(11)) {gain = gain.mul(2)}
    gain = gain.mul(33/1000)
    return gain
}

var updateNumbers = window.setInterval(function() {
    player.basePoints = player.basePoints.add(getPointGen())
    player.points = player.basePoints.slog(player.gainSlog).log(player.gainLog).max(0)
    if (player.basePoints.lte(1)) {
        player.points = Dec(0)
    }
}, 33)

var updateText = window.setInterval(function() {
    document.getElementById("ptamt").innerHTML = player.basePoints + " base points, which become " + player.points + " points"
    document.getElementById("mainUpgs").innerHTML = upgDisplay(11)
}, 33)

