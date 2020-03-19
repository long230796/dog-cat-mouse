var Dog = require('./dog')
var cat = require('./cat')

var cat = new cat('tom')
var dog = new Dog('husky');
dog.sayHi();

dog.eat(cat)
console.log(dog)