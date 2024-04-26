# In-Memory Key-Value Database with Transaction Support

This repository contains an implementation of a simple in-memory key-value database with basic transaction support using JavaScript.

## Features
- Begin a transaction to make grouped changes.
- Put key-value pairs into the database within a transaction.
- Get the value of a key, reflecting the state based on committed data.
- Commit changes to make them permanent.
- Rollback changes to revert to the last committed state.

## How to Run
You can test the functionality of this database directly by running a JavaScript file containing test cases.

## Testing
To test the InMemoryDB class, in a termianl, navigate to the folder directory and type:
node test.js

## Enhancements
To enhance this assignment for official adoption, consider providing a clearer specification on handling nested transactions, as this is a common scenario in database operations. Additionally, include a set of automated tests that students must pass, which can serve as both a grading mechanism and a learning tool for understanding edge cases. Lastly, expanding the assignment to support more complex data types and operations could offer deeper insights into database management systems.