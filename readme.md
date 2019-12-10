# Use this package.json in this project install automatically instead of config manually 
# Following to these steps below to config react-app with WEBPACK

## 1 .Create structure 

* src./
* index.html
* package.json
* .babelrc
* webpack.config.js (use plugin to generate code in visual Studio, eg : webpack plugin)

## 2 . Install dependencies:

    **React / React DOM**
    npm install react@next react-dom@next 
    
## 3 . Install devDependencies:  // only use for dev enviroment
   **2.1 webpack/webpack-cli for global:**
    
    npm install -g webpack webpack-cli 
    
   **2.2 Set up config for webpack - babel:**
    
    npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react css-loader style-loader file-loader mini-css-extract-plugin clean-webpack-plugin
    
   **2.3 Set up the devDependencies frequely for react-app**
    
    npm install axios react-redux react-router-dom redux redux-thunk 

## 4 Config .babelrc

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

# 2 : What's are meaning of our plugin or lib we use in this project:

- `mini-css-extract-plugin` : extract / splited styles code into css file.
- `clean-webpack-plugin` : clean dist folder before building new one.
- `html-webpack-plugin` : simplifies creation of HTML files to serve your webpack bundles.

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