
const sender = require('../sender');

const chai = require('chai');
const {expect} = require('chai');
const spies = require('chai-spies');
chai.use(spies);

describe('Sender', ()=>{
  beforeEach(()=> {
    console.log('Before');
  });
  describe('Test getTemperatureData', () => {
    it('Should retun temperature reading array', () => {
      expect(sender.getTemperatureData()).to.deep.equal([20, 90, 80, 40, 50]);
    });
  });

  describe('Test getSocData', () => {
    it('Should retun SOC reading array', () => {
      expect(sender.getSocData()).to.deep.equal([20, 30, 40, 50, 60]);
    });
  });
});
