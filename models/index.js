'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var fileEditUtils = require('../utils.js');

var myname = "";
var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the model subgenerator with the argument ' + this.name + '.');
    myname = this.name;
};


util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.rewriteAppJs = function () {
    fileEditUtils.rewriteFile({
       file: 'app.js',
       needle: '.todo',
       splicable: [
           '// something from ' + myname,
           '// else'
       ]
    });
};

ModelGenerator.prototype.rewriteSetupJs = function () {
    fileEditUtils.rewriteFile({

        file: path.join('scripts', 'setup.js'),
        needle: '->',
        splicable: [
            '// something from ' + myname,
            '// else'
        ]
    });
};
ModelGenerator.prototype.rewriteTeardownJs = function () {
    fileEditUtils.rewriteFile({

        file: path.join('scripts', 'teardown.js'),
        needle: '->',
        splicable: [
            '// something from ' + myname,
            '// else'
        ]
    });
};
ModelGenerator.prototype.files = function files() {
  this.copy('model.js', 'models/'+ myname + '.js');
};
