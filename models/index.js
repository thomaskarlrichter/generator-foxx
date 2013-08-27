/*jslint indent: 2, nomen: true, maxlen: 100, white: true, plusplus: true, unparam: true */
/*global require*/
(function () {
    'use strict';
    var util = require('util');
    var path = require('path');
    var yeoman = require('yeoman-generator');
    var fileEditUtils = require('../utils.js');
    var fs = require('fs');
    var manifest = fs.readFileSync(path.join(process.cwd(),'manifest.json'),'utf8');
    manifest = JSON.parse(manifest);
    console.log(manifest);
    var name = "";
    var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
        // By calling `NamedBase` here, we get the argument to the subgenerator call
        // as `this.name`.
        yeoman.generators.NamedBase.apply(this, arguments);

        console.log('You called the model subgenerator with the argument ' + this.name + '.');
        name = this.name;
    };


    util.inherits(ModelGenerator, yeoman.generators.NamedBase);

    ModelGenerator.prototype.rewriteAppJs = function () {
        fileEditUtils.rewriteFile({
            file: 'app.js',
            needle: '.todo',
            splicable: [
                '// something from ' + name,
                '// else'
            ]
        });
    };

    ModelGenerator.prototype.rewriteSetupJs = function () {
        fileEditUtils.rewriteFile({
            file: path.join('scripts', 'setup.js'),
            needle: '1->',
            splicable: [
                'var ' + name + '= applicationContext.collectionName("' + name + '");',
                '// '
            ]
        });
    };

    ModelGenerator.prototype.rewriteSetupJs2 = function () {
        fileEditUtils.rewriteFile({
            file: path.join('scripts', 'setup.js'),
            needle: '2->',
            splicable: [
                'if (db._collection(' + name + ') === null) {',
                '    db._create(' + name + ');',
                '} else if (applicationContext.isProduction) {',
                '  console.warn("collection \'%s\' already exists. Leaving it untouched.", ' + name + ');',
                '}'
            ]
        });
    };
    ModelGenerator.prototype.rewriteTeardownJs = function () {
        fileEditUtils.rewriteFile({
            file: path.join('scripts', 'teardown.js'),
            needle: '->',
            splicable: [
                'var ' + name + ' = applicationContext.collectionName("' + name + '")',
                'collection = db._collection(' + name + ');',
                'if (collection !== null) {',
                '  collection.drop();',
                '}'
            ]
        });
    };
    ModelGenerator.prototype.files = function files() {
        this.copy('model.js', 'models/' + name + '.js');
    };
}());