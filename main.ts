pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
let score = 0
let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        score += 1
        tm.showNumber(score)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
    }
    tm.showNumber(score)
    basic.clearScreen()
})
