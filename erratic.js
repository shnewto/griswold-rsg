module.exports = 
{
  version: '0.1.0', // defines your version of the library
  parse: function (grammar) {}, // String -> Object
  generate: function (rules, rule) {}, // (Object, String) -> String
}

// Node.js specific:
var erratic = require('erratic'), fs = require('fs');
// var g = fs.readFileSync('g.bnf', 'utf8');
var g = fs.readFileSync('rsg.bnf', 'utf8');

// The grammar is stored in the string g
var rules = erratic.parse(g);
// console.log(erratic.generate(rules, 'list'));
console.log(erratic.generate(rules, 'poem'));