//CommonJS, every file is module (by default)
//Modules - Encapsulated code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const date = require("./6-alternative-flavour");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

require("./7-mind-grenade");

//do look at 4/5/6/7
