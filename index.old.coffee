#!/usr/bin/env coffee
# React = require('react')
# Backbone = require('backbone')

console.log('Hello, World!')

for i in [10..20]
  myAge = i * 2
  myDogsAge = if myAge < 30 then 20 else 30
  console.log("I am #{ myAge } and my dog is #{ myDogsAge }")

myObj =
  a: "a!"
  b: "b!"
  c:
    d: "E!"

myFunc = (n, m, o) ->
  n * m * o * 2

console.log myFunc 5,
  10
  15

ReactFunc = (obj, children...) ->
  console.log 'object is: ', obj
  console.log 'chilren are', [child + child for child in children]

ReactFunc
  thing: "thingyyyy"
  otherThing: "wooo"
  ,
  "hi"
  "whatsup"
  "eyoooo"

# setTimeout ->
#   console.log('hello!')
# , 1000

class Animal
  constructor: (@name, @sound) ->

  speak: ->
    console.log("I am a #{ @name } and I say #{ @sound }!")

class Dog extends Animal
  constructor: (@sound="bark") ->
    super "Dog", @sound
  chase: (otherAnimal, callBack) ->
    console.log("I am a #{ @name }
      and I am chasing a #{ otherAnimal.name }!")
    if callBack
      callBack()

batman = new Dog()
batman.speak()
baba = new Dog("BARKK!!")
baba.speak()

kitty = new Animal("Cat", "meoww")
kitty.speak()

batman.chase(baba)
batman.chase(kitty, kitty.speak)

#tfhg