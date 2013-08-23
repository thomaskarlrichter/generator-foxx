'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var RepositoryGenerator = module.exports = function RepositoryGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the repository subgenerator with the argument ' + this.name + '.');
};

util.inherits(RepositoryGenerator, yeoman.generators.NamedBase);

RepositoryGenerator.prototype.files = function files() {
  this.copy('repository.js', 'repositories/repository.js');
};
