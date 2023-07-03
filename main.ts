input.onSound(DetectedSound.Loud, function () {
    lightson = !(lightson)
    if (lightson) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lightson = false
basic.showString("Hello!")
basic.showString("setting up ...................")
input.setSoundThreshold(SoundThreshold.Loud, 150)
