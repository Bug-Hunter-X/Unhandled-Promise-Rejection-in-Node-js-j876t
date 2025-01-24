# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  Unhandled promise rejections can lead to unexpected crashes or silent failures, making them difficult to debug.

The `bug.js` file contains code that intentionally throws an unhandled promise rejection.  The `bugSolution.js` file provides a solution to handle the rejection gracefully.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js`.
4. Observe the unhandled promise rejection error message.
5. Run `node bugSolution.js`.
6. Observe that the error is now handled gracefully.