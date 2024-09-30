input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    music.play(music.stringPlayable("C D C C5 C C C C5 ", 120), music.PlaybackMode.UntilDone)
})
function doSomething () {
    return
}
input.onButtonPressed(Button.B, function () {
    basic.showString("carect")
    basic.showString("2.0")
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    basic.showIcon(IconNames.Diamond)
    basic.clearScreen()
})
basic.showString("1+1=?")
