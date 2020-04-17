// DEFINE ME!
/**
 * Computes the nth fibonacci value from the fibonacci sequence
 
 * @param n the nth value being computed
 */
function fibonacci(n) {
  // TODO: IMPLEMENT ME!
  return n;
}

const testCases = [
  {input: 0, expectedOutput: 0},
  {input: 1, expectedOutput: 1},
  {input: 2, expectedOutput: 1},
  {input: 3, expectedOutput: 2},
  {input: 4, expectedOutput: 3},
  {input: 5, expectedOutput: 5},
  {input: 6, expectedOutput: 8},
]

function stringifyTestCase(input, expectedOutput) {
  return `Test Case: fibonacci(${input})  =  ${expectedOutput}`;
}

function testFibonacci() {
  testCases.forEach((testCase) => {
    const { input, expectedOutput } = testCase;
    const stringifiedTestCase = stringifyTestCase(input, expectedOutput);
    try {
      const actualFactorial = factorial(input);
      if (actualFactorial === expectedOutput) {
        console.log(`${stringifiedTestCase}\n\t SUCCESS`);
      } else {
        console.error(`${stringifiedTestCase}\n\t FAILED: expected ${expectedOutput}, but was ${actualFactorial}`);
      }
      
    } catch (e) {
      console.error(`${stringifiedTestCase}\n\tFailed with an error: `, e);
    }
  });
}

testFibonacci();
console.log('Test finished');
