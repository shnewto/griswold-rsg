module.exports =
  {
    version: '0.0.1',
    parse: function (grammar) { },
    generate: function (rules, rule) { },
  }

var erratic = require('erratic'), fs = require('fs');
var g = fs.readFileSync('poem-grammar.bnf', 'utf8');

var rules = erratic.parse(g);
console.log(erratic.generate(rules, 'poem'));