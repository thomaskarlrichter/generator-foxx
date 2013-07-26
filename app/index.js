'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var FoxxGenerator = module.exports = function FoxxGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(FoxxGenerator, yeoman.generators.Base);

FoxxGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.readFileAsString(path.join(__dirname, 'foxx.logo')));

  var prompts = [{
    name: 'foxxName',
    message: 'What do you whant to call your foxx app?'
  }];

  this.prompt(prompts, function (props) {
    this.foxxName = props.foxxName;

    cb();
  }.bind(this));
};

FoxxGenerator.prototype.app = function app() {
  this.mkdir('scripts');
  this.mkdir('files');
  this.mkdir('images');

  this.copy('app.js', 'app.js');
  this.copy('setup.js', 'scripts/setup.js');
  this.copy('teardown.js', 'scripts/teardown.js');
  this.copy('_manifest.json', 'manifest.json');
  this.copy('thumbnail.png', 'images/thumbnail.png');
  this.copy('_bower.json', 'bower.json');
};

FoxxGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
