function Dec(x) {
    return (new Decimal(x))
}

var player = {
    points: Dec(0),
    basePoints: Dec(0),
    basePointGain() {
        let x = Dec(1)
        return x
    },
    gainSlog: Dec(10),
    postSlogPoints: Dec(0),
    gainLog: Dec(10),
    postLogPoints: Dec(0),
}

function gainPoints() {
    player.basePoints = player.basePoints.add(player.basePointGain)    
    player.postSlogPoints = player.basePoints.slog(player.gainSlog)
    player.postLogPoints = player.postSlogPoints.log(player.gainLog)
    player.points = player.postLogPoints.max(0)
    if (player.basePoints.eq(1)) {
        player.points = Dec(0)
    }
}

function getPointGen() {
    let gain = player.basePointGain
    gain = gain.mul(player.buyables.autoclick)
    gain = gain.mul(33/1000)
    return gain
}

var updateNumbers = window.setInterval(function() {
    player.basePoints = player.basePoints.add(getPointGen())
}, 33)

var updateText = window.setInterval(function() {
    document.getElementById("ptamt").innerHTML = player.basePoints + " base points, which become " + player.points + " points"
}, 33)

