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
