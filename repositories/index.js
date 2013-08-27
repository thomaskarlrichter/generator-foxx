/*jslint indent: 2, nomen: true, maxlen: 100, white: true, plusplus: true, unparam: true */
/*global require */
(function () {
    'use strict';
    var util = require('util');
    var yeoman = require('yeoman-generator');
    //var manifest = require('./manifest.json');

    var name = 'repository';

    var RepositoryGenerator = module.exports = function RepositoryGenerator(args, options, config) {
        // By calling `NamedBase` here, we get the argument to the subgenerator call
        // as `this.name`.
        yeoman.generators.NamedBase.apply(this, arguments);

        console.log('You called the repository subgenerator with the argument ' + this.name + '.');
        // TODO: hole Variablen aus manifest.json

        name = this.name;
    };

    util.inherits(RepositoryGenerator, yeoman.generators.NamedBase);

    RepositoryGenerator.prototype.files = function files() {
        this.copy('repository.js', 'repositories/' + name + '.js');
    };
}());