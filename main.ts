servos.P0.setAngle(90)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    servos.P0.setAngle(90)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(200)
})
basic.forever(function () {
    servos.P1.run(50)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(500)
})
