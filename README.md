## 9ic - MovTinder 

### Start 
```
git clone https://github.com/vidaaudrey/9ic
npm install 
npm start 
```


### Development
1. Commit changes. Only do `$git submodule update` if you modified the docs directory. 
```
$git pull
$git merge origin/"branch"
$git submodule update
```



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


