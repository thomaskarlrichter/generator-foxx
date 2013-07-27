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

  // have Foxx greet the user.
  console.log('\n' + this.readFileAsString(path.join(__dirname, 'foxx.logo')).green);
  console.log('Welcome to Foxx Generator'.red + ' - ' + 'ladies and gentlemen!'.cyan);

  var prompts = [{
        type: 'confirm',
        name: 'includeBootstrap',
        message: 'Would you like to include Twitter Bootstrap?',
        default: false
  }, {
        type: 'confirm',
        name: 'includeBackboneJS',
        message: 'Would you like to include Backbonejs?',
        default: false
  },{
        name: 'foxxName',
        message: 'What do you whant to call your foxx app?'
  }];

  this.prompt(prompts, function (props) {
    this.foxxName = props.foxxName;
    this.includeBootstrap = props.includeBootstrap;
    this.includeBackboneJS = props.includeBackboneJS;

    cb();
  }.bind(this));
};

FoxxGenerator.prototype.app = function app() {
  this.mkdir('scripts');
  this.mkdir('files');
  this.mkdir('assets/javascript');
  this.mkdir('assets/css');
  if(this.includeBootstrap !== undefined && this.includeBootstrap) this.copy('bootstrap.css','assets/css/bootstrap.css');
  if(this.includeBackboneJS !== undefined && this.includeBackboneJS) this.copy('backbone.js','assets/javascript/backbone.js');

  this.copy('app.js', 'app.js');
  this.copy('setup.js', 'scripts/setup.js');
  this.copy('teardown.js', 'scripts/teardown.js');
  this.copy('_manifest.json', 'manifest.json');
  this.copy('_README.md', 'README.md');
  this.copy('thumbnail.png', 'images/thumbnail.png');
};
