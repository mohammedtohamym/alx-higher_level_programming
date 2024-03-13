#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
digit  = number%10
if digit > 5:
   message = "and is bigger that 5"
elif digit == 0:
    message = "and id zero"
elif 6< digit <0:
    message = "and is less than 6 and not 0"
print(f"Last digit of {number} is {digit}") 
