'use strict';
var util = require('util');
var path = require('path');
var fs = require('fs');
var yeoman = require('yeoman-generator');
var fileEditUtils = require('../utils.js');
var manifest = fs.readFileSync(path.join(process.cwd(),'manifest.json'));
manifest = JSON.parse(manifest);
console.log(manifest);

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the model subgenerator with the argument ' + this.name + '.');
    this.manifest = manifest;
};


util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.rewriteAppJs = function () {
    fileEditUtils.rewriteFile({
       file: 'app.js',
       needle: '.todo',
       splicable: [
           '// something from ' + this.name,
           '// else'
       ]
    });
};

ModelGenerator.prototype.rewriteSetupJs = function () {
    fileEditUtils.rewriteFile({

        file: path.join('scripts', 'setup.js'),
        needle: '1->',
        splicable: [
            'var ' + this.name +  '= applicationContext.collectionName("' + this.name + '");',
            '// '
        ]
    });
};

ModelGenerator.prototype.rewriteSetupJs2 = function () {
    fileEditUtils.rewriteFile({

        file: path.join('scripts', 'setup.js'),
        needle: '2->',
        splicable: [
            'if (db._collection(' + this.name + ') === null) {',
            '    db._create(' + this.name + ');',
            '} else if (applicationContext.isProduction) {',
            '  console.warn("collection \'%s\' already exists. Leaving it untouched.", ' + this.name + ');',
            '}'
        ]
    });
};
ModelGenerator.prototype.rewriteTeardownJs = function () {
    fileEditUtils.rewriteFile({

        file: path.join('scripts', 'teardown.js'),
        needle: '->',
        splicable: [
            'var ' + this.name + ' = applicationContext.collectionName("' + this.name + '")',
            'collection = db._collection(' + this.name + ');',
            'if (collection !== null) {',
            '  collection.drop();',
            '}'
        ]
    });
};
ModelGenerator.prototype.files = function files() {
  this.copy('model.js', 'models/'+ this.name + '.js');
};
