function sonar () {
    Rover.setServo(Rover.getServoNumber(eServos.Mast), -45)
    if (Rover.readSonar(ePingUnit.Centimeters) < 25) {
        Rover.steer(eDirection.Left, 45)
    }
    basic.pause(1000)
    Rover.setServo(Rover.getServoNumber(eServos.Mast), 45)
    if (Rover.readSonar(ePingUnit.Centimeters) < 25) {
        Rover.steer(eDirection.Right, 45)
    }
    basic.pause(1000)
}
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
Rover.setServo(Rover.getServoNumber(eServos.Mast), -90)
basic.pause(1000)
Rover.setServo(Rover.getServoNumber(eServos.Mast), 0)
basic.pause(1000)
Rover.setServo(Rover.getServoNumber(eServos.Mast), 90)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    Rover.zeroServos(eServoGroup.Mast)
    if (Rover.readSonar(ePingUnit.Centimeters) > 25) {
        Rover.move_milli(eVector.Forward, 60, 400)
    } else {
        sonar()
    }
    Rover.zeroServos(eServoGroup.Mast)
    Rover.move_milli(eVector.Forward, 60, 400)
})
