import { describe, expect, test } from "@jest/globals";

describe("Hello World", () => {
	test("use jsdom in this test file", () => {
		const element = document.createElement("p");
		element.innerText = "Hello, World!";
		expect(element.innerText).toBe("Hello, World!");
	});
});
