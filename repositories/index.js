'use strict';
var util = require('util');
var path = require('path');
var fs = require('fs');
var yeoman = require('yeoman-generator');
var manifest;
var name = 'repository';

var RepositoryGenerator = module.exports = function RepositoryGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the repository subgenerator with the argument ' + this.name + '.');
  name = this.name;
    manifest = fs.readFileSync(path.join(process.cwd(),'manifest.json'));
    manifest = JSON.parse(manifest);
    this.manifest = manifest;
};

util.inherits(RepositoryGenerator, yeoman.generators.NamedBase);

RepositoryGenerator.prototype.files = function files() {
  this.copy('repository.js', 'repositories/'+ name + '.js');
};
