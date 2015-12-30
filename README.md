## 9ic - MovTinder

### Start
```
git clone https://github.com/vidaaudrey/9ic
npm install
npm start
```
Before you run the server, rename the  * ./src/config/configSec.example.js * to *./src/config/configSec.js * and add your TMDB API Key


### Development
1. Commit changes. Only do `$git submodule update` if you modified the docs directory.
```
git pull
git merge origin/"branch"
git submodule update
```

### Linting
A custom 'lint' script has been added to the package.json to fix most style errors and then show the remaining unfixed issues.

First...
```
cd ~
npm install -g babel-eslint eslint eslint-plugin-babel eslint-plugin-react
```

Then in the local directory of the project...
```
npm run lint
```

This will fix many (but not all) eslint errors, e.g. add missing semicolons, and then output the issues that need to be fixed manually.

### UI Design
1. Most of the design files are in `/planning/UIDesign/` directory


### Commit Snapshots
1. d348244  `npm init`


2. 539f7fe  Follow [Getting started with webpack and React, ES6 style](http://humaan.com/getting-started-with-webpack-and-react-es6-style/) to set up the project.
  * add the dependencies
  * run `npm install`
  * run `webpack -w` to watch the file changes

3. c23714e  "chore: update webpack config, setup react-hot-reload"
  * run `npm start` to start the server
  * visit [http://localhost:3000/](http://localhost:3000/)
  * Try to change the content of 'App.js', the browser will refresh and load the content

4. | 421432e | chore: add wiki as submodule
  * `git submodule add https://github.com/vidaaudrey/9ic.wiki.git docs`


5. | d65b0be | chore: add gulp build for the UIDesign process
  * The `gulp` task is only for Planning - UIDesign
  * At designing stage, start the gulp task by `gulp`, any change to the html and scss files under planning/UIDesign will be detected, and the browser will automatically reload the page. visit [http://localhost:3001/](http://localhost:3001/)
