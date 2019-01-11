import { expect } from 'chai';
import sayHello from '../src';

console.log('aa');

describe('index test', () => {
  describe('sayHello function', () => {
    it('should say Hello guys!', () => {
      const str = sayHello();
      expect(str).to.equal('Hello guys!');
    });
  });
});
