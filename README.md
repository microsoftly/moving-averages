# moving-averages
# Description
When looking at trends over time, be it in the stock market, biological data, or log data, a moving average is a useful tool. It’s defined as taking a stream of numeric data (let’s call this an array of integers, n) and returning a new array which is the average of every window of size k over that array. There are more than one approaches to moving averages, but for this use case, we'll only consider SMA (simple moving average).

Examples:
 * n = [1, 2, 3, 4, 5, 6, 7, 8 ]
   * k = 2 (window size)
     * mvg_avg(n, k) = [1.5,2.5,3.5,4.5,5.5,6.5,7.5]
   * k = 3
     * mvg_avg(n, k) = [2, 3, 4, 5 ,6, 7]

## Why does this exist?
This repo is a fixture with which one can learn real world programming by cutting out the BS and getting straight to business, by building things! 

# Roadmap
This repo will start with a super basic skeleton and grow and mature over time. What will, at first, start as just a simple single function will eventually grow into a full fledged hosted consumable service. To help conceptualize this, this section is a roadmap of what will happen.

#### Why not use what someone else wrote?
Good on you, realizing someone else already wrote the solutions to the sliding average algorithm [case](https://www.npmjs.com/package/moving-average) [and](https://www.npmjs.com/package/moving-averages) [point](https://www.npmjs.com/package/technicalindicators#available-indicators). I've provided these to show that you're hunch was correct! Feel free to cheat if you want, but that's not going ot help you learn (and it won't even help you beyond the first and easiest part of the roadmap!)

On top of that, what these other people didn't write is everything else that will exist _on top_ of the algorithmic logic, for instance how would someone use your code over the network? This is just one of the many reasons why even if you cheat by looking at this other code, it won't even help that much with the gestalt of this repository.


### 1. Business Logic
#### Status: TO DO
1. Implement the simple moving average
2. Test your implementation (unit testing)
3. Assess runtime complexity (big O notation - O(1), O(lg(n)), O(n), etc ...)
4. Write performance tests to verify the runtime complexity assessment 
5. typescriptify the existing code
### 2. Add CI (continuous integration)
#### Status: TO DO
1. Discuss what and why (with Matt)
1. Add lint checks to CI 
1. Add tests checks to CI
1. Add coverage reports to CI
### 3. Put the business logic behind a REST API
#### Status: TO DO
This section will leverage a [TDD](https://www.guru99.com/test-driven-development.html) (test driven development) approach.
1. Design the REST API (by hand, pair with Matt)
1. Implement the API skeleton
1. Write tests against the API skeleton (TDD, integration testing)
1. Implement the API endpoints
1. Verify with automated + manual tests
### 4. Add a persistence layer (DB)
#### Status: TO DO
1. Review different persistent storage options (pair with with Matt)
1. Design the data schema (pair with matt)
1. CHOICE: Stand up the persistent storage solution
1. Update the code to use the persistent storage
1. Write tests verifying the correct use of persistent storage (integration tests)
1. Write e2e (end to end) tests verifying the correctness of the overall solution
1. GOTO CHOICE: do the same steps as many times as you wish with different storage choices. Review with Matt prior to this
### 5. New functionality
#### Status: TO DO
1. Discuss new features and design impacts (managing several distinct averages at once, adding users, adding auth, 3rd party integration)
1. Select features to implement, and pitch design 
1. Discuss/plan data schema, business logic, and API changes to handle the new feature
1. Implement features using your existing skillset (repeat until happy)
### 7. Performance Testing
#### Status: TO DO
1. Write tests to verify the performance of real world scenarios
1. Determine bottlenecks and how to help avoid them (e.g. caching, rate limiting)
1. Implement caching, verify/ measure impact
1. Implement rate limiting, verify/ measure impact
### 8. Deploy the service
#### Status: TO DO
1. Discuss cloud providers (e.g. aws, gce, azure)
1. Select a solution ... (aws ... )
1. Deploy persistent storage solution to AWS
1. Deploy server to AWS
1. Automate deployment to AWS using CICD (continuous integration, continuous deployment)
### 9 Add monitoring to the system
#### Status: TO DO
1. Discuss: what is this? why do we need this?
1. Update code to not rely on console output; use a logging library
1. Determine what 3rd party monitoring services should be used
1. Ship logs to a log storage and search solution
1. Create alert integrations based on the metrics of the service
### 10 Celebrate, but still probably keep social distance
#### Status: TO DO
### GOTO 1, but with your own idea (discuss with Matt)


_____
## Footnote:
remember that this repository IS public. Everything you do in it is visible by anyone in the world. Remember that when submitting work or potentially sensitive information
