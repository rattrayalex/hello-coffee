(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/alex/djcode/hello-coffee/index.coffee":[function(require,module,exports){
var Animal, Dog, ReactFunc, baba, batman, i, kitty, myAge, myDogsAge, myFunc, myObj, _i,
  __slice = [].slice,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

console.log('Hello, World!');

for (i = _i = 10; _i <= 20; i = ++_i) {
  myAge = i * 2;
  myDogsAge = myAge < 30 ? 20 : 30;
  console.log("I am " + myAge + " and my dog is " + myDogsAge);
}

myObj = {
  a: "a!",
  b: "b!",
  c: {
    d: "E!"
  }
};

myFunc = function(n, m, o) {
  return n * m * o * 2;
};

console.log(myFunc(5, 10, 15));

ReactFunc = function() {
  var child, children, obj;
  obj = arguments[0], children = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  console.log('object is: ', obj);
  return console.log('chilren are', [
    (function() {
      var _j, _len, _results;
      _results = [];
      for (_j = 0, _len = children.length; _j < _len; _j++) {
        child = children[_j];
        _results.push(child + child);
      }
      return _results;
    })()
  ]);
};

ReactFunc({
  thing: "thingyyyy",
  otherThing: "wooo"
}, "hi", "whatsup", "eyoooo");

Animal = (function() {
  function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  Animal.prototype.speak = function() {
    return console.log("I am a " + this.name + " and I say " + this.sound + "!");
  };

  return Animal;

})();

Dog = (function(_super) {
  __extends(Dog, _super);

  function Dog(sound) {
    this.sound = sound != null ? sound : "bark";
    Dog.__super__.constructor.call(this, "Dog", this.sound);
  }

  Dog.prototype.chase = function(otherAnimal, callBack) {
    console.log("I am a " + this.name + " and I am chasing a " + otherAnimal.name + "!");
    if (callBack) {
      return callBack();
    }
  };

  return Dog;

})(Animal);

batman = new Dog();

batman.speak();

baba = new Dog("BARKK!!");

baba.speak();

kitty = new Animal("Cat", "meoww");

kitty.speak();

batman.chase(baba);

batman.chase(kitty, kitty.speak);



},{}]},{},["/Users/alex/djcode/hello-coffee/index.coffee"]);
