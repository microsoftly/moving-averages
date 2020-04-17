# Internalizing-js
This folder is for projects to implement to help internalize and learn javascript on a deeper level than just using codeacademy's handholding.
# Prerequisites
* have nodejs installed locally. If you do not have it, follow the directions here https://changelog.com/posts/install-node-js-with-homebrew-on-os-x

That's it!
# How to run
from the root directory of the project (the first level of the github clone), you can test you code by running `node src/internalizing-js/factorial` to run the factorial file and `node src/internalizing-js/fib` to run the fibonacci file.

# What you should do
You'll see the note: `// TODO: IMPLEMENT ME!` . Just follow the instructions! You should verify the correctness by adding additional test cases and running them!

# Extra Credit
For extra credit you should try to add it computation of the amount of _work_ being performed. A single unit of work is:
  * single array access
```javascript
const arr = [1,2,3,4];
// this line is one unit of work
arr[2];
```
  * algebraic operations
```javascript
// this line is one unit of work
1+2+3

const x = 1;
const y = 2;

// this line is one unit of work
console.log(x + y);
```
* boolean checks
```javascript
// this line is one unit of work 
if (true) {
  // do a thing
}

/*
  This is 30 units of work
     * 10 boolean comparisons: i < 10
     * 10 additions in the for loop: i++
     * 10 additions in the summation: sum+=i
*/
let sum = 0;
for(let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);
```
  * function calls do not necessarily equate to 1 unit of work
```javascript
// this function does 3n units of work (see previous section for explanation) every time it is called
function sumSeries(n) {
  let s = 0;

  for(let i = 0; i < n; i++) {
    s += i;
  }

  return s;
}

/* 
  this line is 61 unites of work: 
    * sumSeries(10) = 30 units of work
    * sumSeries(20) = 60 units of work
    * single addition (sumSeries(10) + sumSeries(20)) = 1 unit of work
*/
sumSeries(10) + sumSeries(20);

/*
  this function does 3n + 3(n(n+1)/2) units of work (simplifies to 3n(1 + (n+1)/2)  
    * similar to the sumSeries above, the for loop is 3n work (1 boolean check, 1 addition in line with the "for" keyword, 1 addition on the s += line)
    * each sumSeries(i) call costs 3i units of work (notice this is NOT 3n, but 3i. The amount of work when i = 2 is less than the amount of work for i = 5, etc ...) 
      * example here:
        * sumSeries(1) + sumSeries(2) + sumSeries(3) + sumSeries(4) + ... + sumSeries(n) 
        * work = 3*1 + 3*2 + 3*3 + 3*4 + .. + 3*n = 3(1 + 2 +  + 4 + .. + n)
        * the pattern 1 + 2 + 3 + 4 + .. + n is known as a triangular number (https://en.wikipedia.org/wiki/Triangular_number)
        * the equation for a triangular number is i->n∑i = n(n+1)/2. 
          * if you look at the wiki, you'll notice the triangular shape of the visual representation. If you recall, we spoke about computing work based on shapes. This is one of the places where it applies, as a right triangle with a length of n and a width of n+1 has an area of n(n+1)/2
        * BONUS POINTS AGAIN if you want to formally prove this summation. Happy to walk through it with you if you want.
      * Based on the example, the cost of the sumSeries calls in the for loop is 3(n(n+1)/2)
  *  
*/
// makes a sum of sumSeries from i -> n
function sumSeriesSums(n) {
  let s = 0;

  for(let i = 0; i <= n; i++) {
    s += sumSeries(i);
  }

  return s;
}
```
You can either count amount of work by hand using MATH or in the code itself. Here's an example using the above snippets using javascript
```javascript
let workCounter = 0;

function printWorkCounter() {
  console.log(workCounter);
}

function resetWorkCounter() {
  workCounter = 0;
}

function sumSeries(n) {
  let s = 0;

  for(let i = 0; i <= n; i++) {
    // notice that this is INSIDE the for loop. This is because EACH call to the for loop is 3 units of work (1 boolean check, 1 addition (i++), 1 addition (s += i))
    workCounter += 3;
    s += i;
  }

  return s;
}

/* 
  this line is 91 unites of work: 
    * sumSeries(10) = 30 units of work
    * sumSeries(20) = 60 units of work
    * single addition (sumSeries(10) + sumSeries(20)) = 1 unit of work
*/
sumSeries(10) + sumSeries(20);
printWorkCounter();
// reset the work counter so we don't count the work of the section below with the work of the section above
resetWorkCounter();

// makes a sum of sumSeries from i -> n
function sumSeriesSums(n) {
  let s = 0;

  for(let i = 0; i < n; i++) {
    workCounter += 3; // 1 boolean gate (i < n), 1 addition (i++), 1 addition (s +=)
    s += sumSeries(i);
  }

  return s;
}

sumSeriesSums(5);
printWorkCounter(); // expects 60; 3(5)(1 + (5+1)/2)
resetWorkCounter();

sumSeriesSums(15); // expects 405; 3(15)(1 + (15+1)/2)
printWorkCounter();
resetWorkCounter();

sumSeriesSums(30); // expects 1485; 3(30)(1 +(30+1)/2) 
printWorkCounter();
resetWorkCounter();
```


The nuance of what should actually be counted is more complex, but this exercise is meant to help you get some intuition on performance impacts of programs based on how they're implemented (i.e. the algorithms behind them).
All this being said, this is a good approximation of the exact amount of work that will be performed. If you recall from our conversations about big "O" notation ( O(1), O(n), O(log(n)), etc ... ), exact numbers don't matter, only trends
* as a reminder the big "O" notation ignores the lowest order values (the portions that as n -> ∞, become so large that the smaller portions of the equation are insignificant
  * f(n) = 2n^100 + n^5 + 1000000000
    * when n is small (0, 1, 2)2 n^100 and n^5 are somewhat similar in size, when compared to 1000000000
    * when n is large (1000000, 100000000000, etc ...) 1000000000 becomes increasingly small in comparison to the 2n^100 and n^5, and n^5 becomes increasingly insignificant in comparison to n^100
    * coefficients (numbers that divide or multiply a variable) also becoming increasingly insignificant in comparison, and can be removed
    * for this reason: O(f(n)) = 2n^100 ~~+ n^5~~ ~~+ 1000000000~~ = ~~2~~n^100 = n^100
* for example: the sumSeriesSums work equation is 3(n)(1 + (n+1)/2)
  * this simplifies to 3n + 3n*(n+1)/2 = 3n + (3n^2 + 3n)/2 = 3n + 3n^2/2 + 3n/2
  * the big "O" notation for this becomes: O(n) = ~~3n~~ + ~~3~~n^2~~/2~~ + ~~3n/2~~ = n^2

You can read up on the more formal descriptions here: https://www.cs.sfu.ca/~ggbaker/zju/math/complexity.html)
