function sonar () {
    Rover.setServo(Rover.getServoNumber(eServos.Mast), -90)
    fok = Rover.readSonar(ePingUnit.Centimeters)
    if (fok < 25) {
        irany = 0
    }
    basic.pause(500)
    Rover.setServo(Rover.getServoNumber(eServos.Mast), 90)
    fok = Rover.readSonar(ePingUnit.Centimeters)
    if (fok < 25) {
        irany = 1
    }
    basic.pause(500)
    Rover.setServo(Rover.getServoNumber(eServos.Mast), 0)
    fok = Rover.readSonar(ePingUnit.Centimeters)
    if (fok < 25) {
        irany = 2
    }
}
let tavolsag = 0
let irany = 0
let fok = 0
Rover.clearOffsets()
Rover.setLedColor(0xFF0000)
basic.showIcon(IconNames.Heart)
Rover.zeroServos(eServoGroup.All)
basic.pause(100)
Rover.steer(eDirection.Left, 30)
basic.pause(100)
Rover.steer(eDirection.Right, 30)
basic.pause(100)
Rover.setLedColor(0x659900)
sonar()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    Rover.zeroServos(eServoGroup.Mast)
    tavolsag = Rover.readSonar(ePingUnit.Centimeters)
    sonar()
    if (irany == 0) {
        basic.showArrow(ArrowNames.West)
        Rover.steer(eDirection.Left, 30)
    } else if (irany == 1) {
        basic.showArrow(ArrowNames.South)
        Rover.steer(eDirection.Left, 60)
    } else if (irany == 2) {
        basic.showArrow(ArrowNames.East)
        Rover.steer(eDirection.Right, 30)
    } else {
        basic.showArrow(ArrowNames.North)
    }
    Rover.move_milli(eVector.Forward, 60, 400)
})
