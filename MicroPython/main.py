"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
This program adds then shows the number of cookies.
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)

numberOfCookies = 0

while True:
    # adds one cookie
    if button_a.is_pressed():
        numberOfCookies = numberOfCookies + 1
        display.show(str(numberOfCookies))
        