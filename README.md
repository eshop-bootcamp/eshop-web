# EShop UI

### Tech Stack:

 * [ReactJS](https://facebook.github.io/react/) 
 * [MaterialUI](http://www.material-ui.com/) 
 * [WebPack](http://webpack.github.io/)
 * [Fetch](https://github.com/github/fetch) 

#### For Testing
 * [Mocha](https://mochajs.org/)
 * [Chai](http://chaijs.com/)
 * [Enzyme](https://github.com/airbnb/enzyme)
 * [Chai-Enzyme](https://github.com/producthunt/chai-enzyme)   
    


### Setup

You need NodeJS and yarn to be installed.

    $ brew install node
    $ brew install yarn
    $ npm install -g webpack-dev-server

And, then within the project folder, try the following commands 

    $ yarn install
    $ yarn start
    

To start test, you can do the following commands

	$ yarn test
    
### Project Structure

<pre>
    |-- src
    |	|-- app
            |-- components
                |-- Component.js
                |-- component.css
            |-- app.js
            |-- routes.js
    |   |-- www
    |-- test
        |-- helpers
        |-- component.spec.js
    |-- package.json
    |-- webpack-dev-server.config.js
    |-- webpack-production.config.js
</pre>