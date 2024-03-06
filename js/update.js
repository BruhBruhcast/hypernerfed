function pointDisplay() {
    document.getElementById("ptamt").innerHTML = format(player.basePoints) + " base points (" + format(getBasePointGen()) + "/s), which become " + format(player.points) + " points"
    let sc = ""
    if (getBasePointGen().gt(softcapStart(1))) {
        sc = sc + softcapDesc(1)
    }
    document.getElementById("softcaps").innerHTML = sc
}

function tabDisplay() {
    let disp = document.getElementById("tab" + x).style.display
    if (misc.tabs[x].shown() == true) {
        disp = "block"
    }
    else {disp = "none"}
    disp = document.getElementById(x + "subtab" + y).style.display
    if (misc.tabs[x].subtabs[y].shown() == true) {
        disp = "block"
    }
    else {disp = "none"}
}

function upgDisplay(x) {
    let text = ""
    if (player.upgrades[x].title) {text = text + "<b>" + player.upgrades[x].title + "</b><br>"}
    text = text + player.upgrades[x].description
    if (hasUpgrade(x)) {
        text = text + "<br>Bought!"
    }
    else {
        text = text + "<br>Cost: " + format(player.upgrades[x].cost) + " points<br>(Requires " + format(player.gainSlog.tetrate(player.gainLog.pow(player.upgrades[x].cost))) + " base points)"
    }
    text = text + "<br>" + player.upgrades[x].effDescription()
    document.getElementById("upg" + x).innerHTML = text
    document.getElementById("upg" + x).setAttribute("onclick", "buyUpgrade(" + x + ")")
    if (player.upgrades[x].shown == true) {
        document.getElementById("upg" + x).style.display = "none"
    }
    else {
        document.getElementById("upg" + x).style.display = "block"
    }
}

// template by HipHopHuman

let time_step = 1000 / 60
let last_time = null
let total_time = 0
let accumulated_lag = 0
let number_of_updates = 0

function loop(current_time) {
  if (last_time === null) last_time = current_time
  const delta_time = current_time - last_time
  total_time += delta_time
  accumulated_lag += delta_time
  last_time = current_time
  
  while (accumulated_lag >= time_step) {
    accumulated_lag -= time_step
    update(time_step, total_time)
    
    if (number_of_updates++ >= 300) {
      number_of_updates = 300
    }
  }
  
  render()
  
  requestAnimationFrame(loop)
}
requestAnimationFrame(loop)

function update(delta_time, total_time) {
    player.basePoints = player.basePoints.add(getBasePointGen().mul(delta_time/1000))
    player.points = player.basePoints.slog(player.gainSlog).log(player.gainLog).max(0)
    if (player.basePoints.lte(1)) {
        player.points = Dec(0)
    }
}

function render() {
    pointDisplay()
    upgDisplay(11)
    upgDisplay(12)
    upgDisplay(13)
    upgDisplay(14)
    upgDisplay(15)
    upgDisplay(21)
    upgDisplay(22)
    upgDisplay(23)
    upgDisplay(24)
    upgDisplay(25)
    upgDisplay("unl1")
}

