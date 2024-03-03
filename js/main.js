var player = {
    points: Dec(0),
    basePoints: Dec(0),
    gainSlog: Dec(10),
    gainLog: Dec(10),
    gainSoftcaps: {
        1: {
            start() {
                let x = Dec(20)
                return x
            },
            effect() {
                let x = Dec(1/2)
                return x
            },
            description() {
                let text = "Above " + softcapStart(1) + ", your base point gain has been raised by " + softcapEffect(1)
                return text
            },
        },
    },
    upgrades: {
        11: {
            title: "Doubler",
            description: "Multiply point gain by 2",
            cost: Dec(0.001),
            effect() {
                let eff = Dec(2)
                if (hasUpgrade(21)) {eff = eff.pow(upgEff(21))}
                return eff
            },
            effDescription() {
                return ("Effect: " + this.effect() + "x")
            },
            shown() {
                return true
            },
            bought: false,
        },
        12: {
            title: "Tripler",
            description: "Multiply point gain by 3",
            cost: Dec(0.06),
            effect() {
                let eff = Dec(3)
                if (hasUpgrade(22)) {eff = eff.pow(upgEff(22))}
                return eff
            },
            effDescription() {
                return ("Effect: " + this.effect() + "x")
            },
            shown() {
                return true
            },
            bought: false,
        },
        13: {
            title: "Quadrupler",
            description: "Multiply point gain by 4",
            cost: Dec(0.1),
            effect() {
                let eff = Dec(4)
                if (hasUpgrade(23)) {eff = eff.pow(upgEff(23))}
                return eff
            },
            effDescription() {
                return ("Effect: " + this.effect() + "x")
            },
            shown() {
                return true
            },
            bought: false,
        },
        14: {
            title: "Quintupler",
            description: "Multiply point gain by 5",
            cost: Dec(0.145),
            effect() {
                let eff = Dec(5)
                if (hasUpgrade(24)) {eff = eff.pow(upgEff(24))}
                return eff
            },
            effDescription() {
                return ("Effect: " + this.effect() + "x")
            },
            shown() {
                return true
            },
            bought: false,
        },
        15: {
            title: "Sextupler",
            description: "Multiply point gain by 6",
            cost: Dec(0.16),
            effect() {
                let eff = Dec(6)
                if (hasUpgrade(25)) {eff = eff.pow(upgEff(25))}
                return eff
            },
            effDescription() {
                return ("Effect: " + this.effect() + "x")
            },
            shown() {
                return true
            },
            bought: false,
        },
        21: {
            title: "Doubler Boost",
            description: "Increase 'Doubler' effect by base point amount",
            cost: Dec(0.17),
            effect() {
                let eff = player.basePoints
                eff = eff.iteratedlog(10, 2)
                eff = eff.add(1).max(1)
                return eff
            },
            effDescription() {
                return ("Effect: ^" + this.effect())
            },
            shown() {
                return true
            },
            bought: false,
        },
        22: {
            title: "Tripler Boost",
            description: "Increase 'Tripler' effect by base point amount",
            cost: Dec(0.175),
            effect() {
                let eff = player.basePoints
                eff = eff.iteratedlog(10, 2)
                eff = eff.div(Dec(3).sqrt().div(Dec(2).sqrt())).add(1).max(1)
                return eff
            },
            effDescription() {
                return ("Effect: ^" + this.effect())
            },
            shown() {
                return true
            },
            bought: false,
        },
        23: {
            title: "Quadrupler Boost",
            description: "Increase 'Quadrupler' effect by base point amount",
            cost: Dec(0.178),
            effect() {
                let eff = player.basePoints
                eff = eff.iteratedlog(10, 2)
                eff = eff.div(Dec(2).sqrt()).add(1).max(1)
                return eff
            },
            effDescription() {
                return ("Effect: ^" + this.effect())
            },
            shown() {
                return true
            },
            bought: false,
        },
        24: {
            title: "Quintupler Boost",
            description: "Increase 'Quintupler' effect by base point amount",
            cost: Dec(0.18),
            effect() {
                let eff = player.basePoints
                eff = eff.iteratedlog(10, 2)
                eff = eff.div(Dec(5).sqrt().div(Dec(2).sqrt())).add(1).max(1)
                return eff
            },
            effDescription() {
                return ("Effect: ^" + this.effect())
            },
            shown() {
                return true
            },
            bought: false,
        },
        25: {
            title: "Sextupler Boost",
            description: "Increase 'Sextupler' effect by base point amount",
            cost: Dec(0.182),
            effect() {
                let eff = player.basePoints
                eff = eff.iteratedlog(10, 2)
                eff = eff.div(Dec(3).sqrt()).add(1).max(1)
                return eff
            },
            effDescription() {
                return ("Effect: ^" + this.effect())
            },
            shown() {
                return true
            },
            bought: false,
        },
    },
}

function getBPGainMult() {
    let mult = Dec(1)
    if (hasUpgrade(11)) {mult = mult.mul(upgEff(11))}
    if (hasUpgrade(12)) {mult = mult.mul(upgEff(12))}
    if (hasUpgrade(13)) {mult = mult.mul(upgEff(13))}
    if (hasUpgrade(14)) {mult = mult.mul(upgEff(14))}
    if (hasUpgrade(15)) {mult = mult.mul(upgEff(15))}
    return mult
}

function getBasePointGen() {
    let gain = Dec(1)
    gain = gain.mul(getBPGainMult())
    if (gain.gt(softcapStart(1))) {
        gain = gain.softcap(1, "pow", 1)
    }
    return gain
}

function admin() {
    player.upgrades[11].bought = true
    player.upgrades[12].bought = true
    player.upgrades[13].bought = true
    player.upgrades[14].bought = true
    player.upgrades[15].bought = true
    player.upgrades[21].bought = true
    player.upgrades[22].bought = true
    player.upgrades[23].bought = true
    player.upgrades[24].bought = true
    player.upgrades[25].bought = true
}

