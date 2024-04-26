const InMemoryDB = require('./main');

function testInMemoryDB() {
    const db = new InMemoryDB();

    try {
        console.log("Test 1: Attempt to get a non-existent key (should return null)");
        console.log("Result:", db.get("A")); // Expected: null

        console.log("\nTest 2: Attempt to put without a transaction (should throw error)");
        try {
            db.put("A", 5);
        } catch (error) {
            console.log("Caught Error:", error.message); // Expected: No transaction in progress...
        }

        console.log("\nTest 3: Start transaction and put values");
        db.beginTransaction();
        db.put("A", 5);
        console.log("Value of A during transaction (should return 5):", db.get("A")); // Expected: 5

        console.log("\nTest 4: Commit transaction and check value");
        db.commit();
        console.log("Value of A after commit (should return 5):", db.get("A")); // Expected: 5

        console.log("\nTest 5: Start another transaction and rollback");
        db.beginTransaction();
        db.put("A", 10);
        console.log("Value of A during second transaction (should return 10):", db.get("A")); // Expected: 10
        db.rollback();
        console.log("Value of A after rollback (should return 5):", db.get("A")); // Expected: 5

        console.log("\nTest 6: Error handling on redundant commit");
        try {
            db.commit();
        } catch (error) {
            console.log("Caught Error:", error.message); // Expected: No transaction to commit
        }

    } catch (e) {
        console.error("An error occurred during testing:", e);
    }
}

testInMemoryDB();
