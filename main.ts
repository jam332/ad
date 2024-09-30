input.onButtonPressed(Button.A, function () {
    if (false) {
        basic.showIcon(IconNames.No)
        music.play(music.stringPlayable("C D C C5 C C C C5 ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # . . .
            # # . # .
            . . # # .
            # # . # #
            # # . # #
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # . . # .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # . . # #
            # . # . #
            # # . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        music.rest(music.beat(BeatFraction.Breve))
        basic.showString("time up you loose")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("1+1=?")
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        basic.showString("carect")
        basic.showString("2.0")
        basic.clearScreen()
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Happy)
        basic.showNumber(0)
        basic.clearScreen()
        basic.showIcon(IconNames.Diamond)
        basic.showString("1+1=2")
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # . . .
            # # . # .
            . . # # .
            # # . # #
            # # . # #
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # . . # .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # . . # #
            # . # . #
            # # . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        music.rest(music.beat(BeatFraction.Breve))
        basic.showString("time up you loose")
    }
})
basic.showString("1+1=?")
