import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
chai.config.includeStack = true;

describe('my app', () => {
    context('with valid code', () => {
       it('works', () => {
           // var promise = someHelper.requestSomething(inputValues).then(function(obj) {
           //     return obj.data;
           // });
           // return expect(promise).to.eventually.eq(expectedValue);
           return true;
       });
    });
});