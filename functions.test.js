/*jshint esversion: 6 */
const functions = require("./functions");
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database Initialized");
// const closeDatabase = () => console.log("Database closed");

const nameCheck = () => console.log("Checking names...");

describe("checking names", () => {
  beforeEach(() => nameCheck());

  test("User is sawan", () => {
    const user = "sawan";
    expect(user).toBe("sawan");
  });

  test("User is raj", () => {
    const user = "raj";
    expect(user).toBe("raj");
  });
});
// toBe
test("Adds 2 + 2 equal 4", () => {
  expect(functions.add(2, 2)).toBe(4); // toBe() is a matcher func...
});

// toBeNull
test("Should be Null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
// toEqual
test("User should be Rajkumar Patoliya object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Rajkumar",
    lastName: "Patoliya"
  });
});

// lessThan
test("should be under 1600", () => {
  const load1 = 600;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// greaterThan
test("should be above 2000", () => {
  const load1 = 1400;
  const load2 = 4400;
  expect(load1 + load2).toBeGreaterThan(2000);
});

//Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in username", () => {
  usernames = ["rajkumar", "prateek", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data
test("Retrived username must be LEANNE GRAHAM", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async await
test("Retrived username must be LEANNE GRAHAM", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
