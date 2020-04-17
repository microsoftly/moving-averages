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

function sumSeriesSums(n) {
  let s = 0;

  for(let i = 0; i < n; i++) {
    workCounter += 3;
    s += sumSeries(i);
  }

  return s;
}

function run() {
  for(let i = 0; i <= 30; i++) {
    const expected = (3*i) + (3 * i * (i + 1) / 2)
    sumSeriesSums(i);
    console.log(`${i}\n\tExpected: ${expected}\nActual: ${workCounter}\n\n`)
    resetWorkCounter();
  }
}

run();
