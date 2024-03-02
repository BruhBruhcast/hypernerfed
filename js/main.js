var player = {
    points: Dec(0),
    basePoints: Dec(1000),
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
            cost: Dec(0.06),
            effect() {
                let eff = Dec(4)
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
            cost: Dec(0.06),
            effect() {
                let eff = Dec(5)
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
            cost: Dec(0.06),
            effect() {
                let eff = Dec(6)
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
        gain = gain.div(softcapStart(1)).pow(softcapEffect(1)).mul(softcapStart(1))
    }
    return gain
}



