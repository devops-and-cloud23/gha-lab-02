const test = require("node:test");
const assert = require("node:assert");
const { add } = require("./app");

test("2 + 3 should equal 5", () => {
  assert.strictEqual(add(2, 3), 5);
});