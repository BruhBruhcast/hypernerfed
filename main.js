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


