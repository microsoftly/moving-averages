const { movingAverage } = require('../src');
const { expect } = require('chai');

describe('simple moving average', () => {
  it('Correctly calculates with a window size of 3', () => {
    // arrange
    const n = [1,2,3,4,5,6,7,8];
    const window = 3;

    // action
    const avgArr = movingAverage(n, window);

    // assert
    expect(avgArr).not.to.be.undefined;
    expect(avgArr[0]).to.be.equal(2); 
    expect(avgArr[1]).to.be.equal(3); 
    expect(avgArr[2]).to.be.equal(4); 
    expect(avgArr[3]).to.be.equal(5); 
    expect(avgArr[4]).to.be.equal(6); 
  });
});
