((init, describe, test, assert, done) => {
  init();

  describe('Description for these tests', it => {
    test('test passing item', it => {
      const value1 = 10, value2 = 10;

      return assert(value1 === value2);
    });

    test('test fail item', it => {
      const value1 = 10, value2 = 9;

      return assert(value1 === value2);
    });
  });

  done();
})(function init() {
  global.results = [];
},
function describe(text, func) { console.group('\n\x1b[37m', text); func(); console.groupEnd() },
function test(text, func) { console.log(func(), '\x1b[90m', text, '\x1b[37m') },
function assert(sentence) { return results.push(sentence) && sentence ? '\x1b[32m✓' : '\x1b[31m✗' },
function done() { console.info('\n\x1b[32mTOTAL PASS:', results.filter(i=>i).length, '\n\x1b[31mTOTAL FAIL:', results.filter(i=>!i).length) });
