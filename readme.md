# I Use this package.json in this project install automatically instead of config manually 
* For some errors orcuse during run this project that related to update/remove libs/plugins.
Search the error in CLI, browser to research in google will help you.
# II Following to these steps below to config react-app with WEBPACK

## 1 .Create structure 

* src./
* index.html
* package.json
* .babelrc
* webpack.config.js (use plugin to generate initial configation code in visual Studio, eg : webpack plugin)

## 2 . Install dependencies:

    ** Set up the devDependencies frequely for react-app**
    
    npm install axios react-redux react-router-dom redux redux-thunk
    
## 3 . Install Devdependencies:  

   **2.1 webpack/webpack-cli for global:** 
    
    npm install -g webpack webpack-cli 
    
   **2.2 Set up config for webpack - babel:**
    
    npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react css-loader style-loader file-loader mini-css-extract-plugin clean-webpack-plugin    

## 4 Config .babelrc
`preset-env`: reset ES6 to ES5
`@babel/react`: reset react to ES5
``` 
{
    "presets": [
      "@babel/preset-env",
      "@babel/react"  
    ]
}

``` 

## 5 : Import libs: Bootstrap 4 , jquery, font-awesome

    npm install bootstrap jquery font-awesome

# III: What's are meaning of our plugin or lib we use in this project:
## 2.1 External webpack plugins:
- `mini-css-extract-plugin` : extract / splited styles code into css file.
- `clean-webpack-plugin` : clean dist folder before building new one.
- `html-webpack-plugin` : simplifies creation of HTML files to serve your webpack bundles.
- `webpack-bundle-analyzer` : analyzer visualy. If use change flat of mode to 'server' in `webpack.config.js`
- `webpack-dev-server`: run application based on nodejs
## 2.2 internal webpack supported plugins:
- `splitChunks` : chunks duplicate codes/libs into new files.
# 3 Errors when webpack are running:

####3.1

```
Support for the experimental syntax 'classProperties' isn't currently enabled
```
**Use** : 
`npm install --save-dev @babel/plugin-proposal-class-properties`


####3.2

```
Uncaught ReferenceError: jQuery is not defined
    at Object../node_modules/bootstrap3/js/transition.js
```
**Use** : add new plugin in webpack config file
```
new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
})
```