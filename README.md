# Generator-foxx

A generator for Foxx applications based on Yeoman.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-foxx`
- Run: `yo foxx`

## Foxx

[Foxx](http://foxx.arangodb.org) is a lightweight Javascript “micro framework” which
allows you to build applications directly on top of [ArangoDB]
(http://www.arangodb.org) and
therefore skip the middleman (Rails, Django, Symfony or whatever your
favorite web framework is). Inspired by frameworks like Sinatra Foxx is
designed with simplicity and the specific use case of modern client-side
MVC frameworks in mind.

Read the [Foxx Documentation](http://www.arangodb.org/manuals/1.4/UserManualFoxx.html) for further information.

## Generators

Available generators:

* [foxx](#app) (aka [foxx:app](#app))
* [foxx:models](#models)
* [foxx:repositories](#repositories)


**Note: Generators are to be run from the root directory of your app.**

### App
Sets up a new Foxx app, generating all the boilerplate you need to get started. The app generator also optionally
installs Twitter Bootstrap and additional BackboneJS

### Models
Generates a neu model.
- Run: `yo foxx:models "modelname"`

Example:
```bash
yo foxx:models modelname
```
### Repositories
Generates a new repository.
- Run: `yo foxx:repositories "repositoryname"`

Example:
```bash
yo foxx:repositories repositoryname
```

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
