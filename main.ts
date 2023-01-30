function updatescores () {
    OLED.clear()
    OLED.writeStringNewLine("Player A: " + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B: " + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + rounds)
}
let rounds = 0
let ties = 0
let PA = 0
let PB = 0
OLED.init(128, 64)
PB = 0
PA = 0
ties = 0
rounds = 0
OLED.writeStringNewLine("GET YO BOOTY OVER HERE AND PLAY WITH MEEEEEE")
basic.pause(2000)
updatescores()
