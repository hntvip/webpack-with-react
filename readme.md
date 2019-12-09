# Use this package.json in this project install automatically instead of config manually 
# Following to these steps below to config react-app with WEBPACK
##1.Create structure 
* src./
* index.html
* package.json
* webpack.config.js (use plugin to generate code in visual Studio, eg : webpack plugin) 
##2. Install dependencies:
    **React / React DOM**
    npm install react@next react-dom@next 
    
##3. Install devDependencies: 
    // only use for dev enviroment
   **2.1 webpack/webpack-cli for global:**
    
    npm install -g webpack webpack-cli 
    
   **2.2 Set up config for webpack - babel:**
    
    npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react css-loader style-loader extract-text-webpack-plugin@next 
    
   **2.3 Set up the devDependencies frequely for react-app**
    
    npm install axios react-redux react-router-dom redux redux-thunk --save-dev
    

##4. Config .babelrc
``` 
{
    "presets": [
      "@babel/preset-env",
      "@babel/react"  
    ]
}

``` 

##5: Import libs: Bootstrap 4 , jquery, font-awesome

    npm install bootstrap jquery font-awesome

##6: Tobe continued