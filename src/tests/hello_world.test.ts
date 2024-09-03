import { describe, expect, test } from "@jest/globals";

describe("Hello World", () => {
	test("Hello World", () => {
		const expected = "Hello, world!";
		const actual = "Hello, world!";
		expect(actual).toBe(expected);
	});
});
