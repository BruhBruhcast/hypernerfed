var player = {
    points: Dec(0),
    basePoints: Dec(0),
    gainSlog: Dec(10),
    gainLog: Dec(10),
    upgrades: {
        11: {
            title: "Start",
            description: "Gain 100% of base point gain every second",
            cost: Dec(0.1),
            resource: player.basePoints,
            shown() {
                return true
            },
            bought: false,
        },
    },
}

function basePointGain() {
    let x = Dec(1)
    return x
},

function gainPoints() {
    player.basePoints = player.basePoints.add(basePointGain())    
}

function getPointGen() {
    if (!hasUpgrade(11)) {return Dec(0)}
    let gain = basePointGain()
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
}, 33)

