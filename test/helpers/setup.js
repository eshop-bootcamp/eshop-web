require('babel-core/register');
var hook = require('css-modules-require-hook');
var path = require('path');
var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');
var chaiAsPromised = require('chai-as-promised');
var chaiEnzyme = require('chai-enzyme');


chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiEnzyme())

global.chai = chai
global.sinon = sinon
global.expect = chai.expect
global.should = chai.should()

hook({
  // setting root to the parent directory
  rootDir: path.join(__dirname, '..')
});