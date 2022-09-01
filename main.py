def sonar():
    global fok, irany
    Rover.set_servo(Rover.get_servo_number(eServos.MAST), -90)
    fok = Rover.read_sonar(ePingUnit.CENTIMETERS)
    if fok < 25:
        irany = 0
    basic.pause(500)
    Rover.set_servo(Rover.get_servo_number(eServos.MAST), 90)
    fok = Rover.read_sonar(ePingUnit.CENTIMETERS)
    if fok < 25:
        irany = 1
    basic.pause(500)
    Rover.set_servo(Rover.get_servo_number(eServos.MAST), 0)
    fok = Rover.read_sonar(ePingUnit.CENTIMETERS)
    if fok < 25:
        irany = 2
tavolsag = 0
irany = 0
fok = 0
Rover.clear_offsets()
Rover.set_led_color(0xFF0000)
basic.show_icon(IconNames.HEART)
Rover.zero_servos(eServoGroup.ALL)
basic.pause(100)
Rover.steer(eDirection.LEFT, 30)
basic.pause(100)
Rover.steer(eDirection.RIGHT, 30)
basic.pause(100)
Rover.set_led_color(0x659900)
sonar()
basic.show_icon(IconNames.HAPPY)

def on_forever():
    global tavolsag
    Rover.zero_servos(eServoGroup.MAST)
    tavolsag = Rover.read_sonar(ePingUnit.CENTIMETERS)
    sonar()
    if irany == 0:
        basic.show_arrow(ArrowNames.WEST)
        Rover.steer(eDirection.LEFT, 30)
    elif irany == 1:
        basic.show_arrow(ArrowNames.SOUTH)
        Rover.steer(eDirection.LEFT, 60)
    elif irany == 2:
        basic.show_arrow(ArrowNames.EAST)
        Rover.steer(eDirection.RIGHT, 30)
    else:
        basic.show_arrow(ArrowNames.NORTH)
    Rover.move_milli(eVector.FORWARD, 60, 400)
basic.forever(on_forever)
