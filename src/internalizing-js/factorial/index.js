// DEFINE ME!
/**
 * Computes the value of n! Returns a number
 
 * @param n the number that the factorial is being applied to
 */
function factorial(n) {
  // TODO: IMPLEMENT ME!
  return n;
}

const testCases = [
  {input: 0, expectedOutput: 1},
  {input: 1, expectedOutput: 1},
  {input: 2, expectedOutput: 2},
  {input: 3, expectedOutput: 6},
  {input: 4, expectedOutput: 24},
]

function stringifyTestCase(input, expectedOutput) {
  return `Test Case: ${input}!  =  ${expectedOutput}`;
}

function testFactorial() {
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

testFactorial();
console.log('Test finished');
