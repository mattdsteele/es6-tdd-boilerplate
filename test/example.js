import assert from 'assert';
import App from '../src/class';
import { expect } from 'chai';

describe('something', () => {
  it('test', () => {
    expect(1).to.equal(1);
  });
  it('another', () => {
    var a = new App('What is my name');
    expect(a.message).to.equal('What is my name');
  });
});
