'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require("chalk");


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
    console.log(chalk.green('\n' + this.readFileAsString(path.join(__dirname, 'foxx.logo'))));
    console.log('Welcome to Foxx Generator' + ' - ' + 'ladies and gentlemen!');

    var prompts = [
        {
            name: 'foxxName',
            message: 'What do you whant to call your foxx app?',
            default: path.basename(process.cwd())
        },
        {
            name: 'description',
            message: 'Description',
            default: 'The best foxx app ever.'
        },
        {
            name: 'license',
            message: 'License',
            default: 'MIT'
        },
        {
            name: 'githubUsername',
            message: 'GitHub username'
        },
        {
            name: 'authorName',
            message: 'Author\'s Name'
        },
        {
            name: 'authorEmail',
            message: 'Author\'s Email'
        },
        {
            type: 'confirm',
            name: 'includeBootstrap',
            message: 'Would you like to include Twitter Bootstrap?',
            default: false
        },
        {
            type: 'confirm',
            name: 'includeBackboneJS',
            message: 'Would you like to include Backbonejs?',
            default: false
        }
    ];

    this.prompt(prompts, function (props) {
        this.slugname = this._.slugify(props.foxxName);

        this.repoUrl = 'https://github.com/' + props.githubUsername + '/' + this.slugname;

        this.props = props;
        this.foxxName = props.foxxName;
        this.description = props.description;
        this.githubUsername = props.githubUsername;
        this.authorEmail= props.authorEmail;
        this.authorName = props.authorName;
        this.license = props.license;
        this.includeBootstrap = props.includeBootstrap;
        this.includeBackboneJS = props.includeBackboneJS;

        cb();
    }.bind(this));
};

FoxxGenerator.prototype.app = function app() {
    this.mkdir('scripts');
    this.mkdir('files');
    this.mkdir('models');
    this.mkdir('repositories');
    this.mkdir('assets/javascript');
    this.mkdir('assets/css');
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_style.css', 'assets/css/style.css');
    this.copy('_bower.json', 'bower.json');
    this.template('_index.html', 'assets/index.html');
    this.copy('app.js', 'app.js');
    this.copy('setup.js', 'scripts/setup.js');
    this.copy('teardown.js', 'scripts/teardown.js');
    this.copy('_manifest.json', 'manifest.json');
    this.copy('_README.md', 'README.md');
    this.copy('thumbnail.png', 'images/thumbnail.png');
};
