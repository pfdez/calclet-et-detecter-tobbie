input.onGesture(Gesture.LogoUp, function () {
    conter = conter + 1
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
    basic.showNumber(conter)
})
input.onGesture(Gesture.TiltRight, function () {
    conter = conter * 2
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(2000)
    basic.showNumber(conter)
})
input.onGesture(Gesture.TiltLeft, function () {
    conter = conter / 2
    basic.showLeds(`
        . . # . .
        . . . . .
        # # # # #
        . . . . .
        . . # . .
        `)
    basic.pause(2000)
    basic.showNumber(conter)
})
let conter = 0
conter = 0
basic.showNumber(conter)
