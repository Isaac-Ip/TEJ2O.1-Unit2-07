/* Copyright (c) 2025 Isaac Ip All rights reserved
 *
 * Created by: Isaac Ip
 * Created on: Sep 2025
 * This program gets and shows the number of cookies.
*/

let numberOfCookies = 0

basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    numberOfCookies = numberOfCookies + 1
    basic.showNumber(numberOfCookies)
})
