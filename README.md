## 9ic - mindr

### Start
```
git clone https://github.com/vidaaudrey/9ic
npm install
npm start
```
Before you run the server, rename the  * ./src/config/configSec.example.js * to *./src/config/configSec.js * and add your TMDB API Key

 - [Live Demo - Now Playing](http://9ic.github.io/#/movies/now_playing)
 - [Live Demo - Search Movies](http://9ic.github.io/#/search/french)

 - [Read Wiki](https://github.com/9ic/9ic/wiki)
 - [Mindmap for the folder structure](MindrDevMindMap.png)
 - [Understand the App architecture](MindrDevFlowChart.png)


### Learn
- [React.js Conf 2015 - Making your app fast with high-performance components](https://youtu.be/KYzlpRvWZ6c)
- [React.js Conf 2015 - Hype!](https://youtu.be/z5e7kWSHWTg?list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr)
- [React.js Conf 2015 - Scalable Data Visualization](https://www.youtube.com/watch?v=2ii1lEkIv1s&index=15&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr)
- [React.js Conf 2015 - Refracting React](https://youtu.be/5hGHdETNteE?list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr)


### Development
1. Commit changes. Only do `$git submodule update` if you modified the docs directory.
```
git pull
git merge origin/"branch"
git submodule update
```

### Deploy

This is only the temp solution. It will copy the public folder (except index.html) to  `deploy/` directory and push the updated files to a [separate git repo](https://github.com/9ic/9ic.github.io). If you don't have any new files, the command will fail. 

To run the deploy successfully, first cd to deploy directory, and add `https://github.com/9ic/9ic.github.io.git` as your git remote. 
```bash 
➜  deploy git:(master) git remote -v
origin  https://github.com/9ic/9ic.github.io.git (fetch)
origin  https://github.com/9ic/9ic.github.io.git (push)
```

To deploy, at the *root* directory, run 
```
npm run git-deploy
```

### Create OSX App 
Tutorial: [Creating Desktop Applicatio with node-webkit](https://strongloop.com/strongblog/creating-desktop-applications-with-node-webkit/)
1. cd to `deploy` 
2. put the downloaded nwjs files to this directory 
4. run 
```
zip -r Mindr.nw *
nwjs.app/Contents/MacOS/nwjs
```
![Desktop Screenshots](_screenshots/desktop-app.png)

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
1. Most of the design files are in `/_planning/UIDesign/` directory
2. When starting a new UIDesign 
  * create a new directory in the UIDesign folder, and add related data static HTML files or any other data necessary. 
  * run `gulp` and visit [http://localhost:3001](http://localhost:3001) to see the design. (You may want to add the necessary link at the home page for quick access)
  * The browser will reload the html file as soon as you make any changes on the SASS or HTML file 


### TODO
* Basic Features

  [ ] Add more information to the MovieItemWidget `src/components/MovieItemWidget.js` (ref `_planning/UIDesign/Movie/movie.json` for data format)

  [ ] Add GenreList 
    -  ref `_planning/UIDesign/Genre/genre.json` for the data format 
    - apiTMDB has getGenre() which will return a promise of the genre data 
    - ref `/src/containers/MovieListContainer.js` on how to process the data 
    - step1: add / update the routes.js  if necessary
    - step2: update the GenreListPage.js if necessary
    - step3: update the GenreListContainer.js 
    - step4: update the GenreListWidget.js and GenreListItemWidget.js

  [ ] Add Like/Dislike  `src/components/LikeButtonsWidget.js`

  [ ] Add pagination `src/components/PagerWidget.js`

  [ ] Add Tinder interface 

  [ ] Add user login / logout....

  [ ] Add About

  [ ] Complete Review related components

  [ ] Complete CrumbWidget

  [ ] Complete StarRatingWidget

* Test 

  [ ] Add Basic Test 

*  Database Interaction 

*  Components 

  * Home
    - [X] Home 
    - [X] ExploreLinks
    - [X] MovieSearch
  * Movie 
    - [X] MovieList
    - [X] MovieListItem
  * Tinder
    - [ ]
* Redux

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
