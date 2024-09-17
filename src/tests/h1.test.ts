import { describe, expect, test } from "@jest/globals";
import { JSDOM } from "jsdom";
import { embedScript, LIB_PATH, waitForDocumentLoad } from "./utils";

describe("Element: H1", () => {
	test("h1 can be displayed properly", () => {
		const { document } = new JSDOM(
			embedScript(
				LIB_PATH,
				`
                app.display({
                    type: "H1",
                    textContent: "Hello World"
                })
                `
			),
			{
				runScripts: "dangerously",
				pretendToBeVisual: true,
			}
		).window;

		waitForDocumentLoad(document).then(() => {
			expect(document.body.getElementsByTagName("h1").length).toBe(1);
			expect(
				document.body.getElementsByTagName("h1")[0].textContent
			).toBe("Hello World");
		});
	});

	test("h1s can be nested", () => {
		const { document } = new JSDOM(
			embedScript(
				LIB_PATH,
				`
                app.display({
                    type: "H1",
                    textContent: "Hello World",
                    subElements: [{
                        type: "H1",
                        textContent: "Hello World"
                    }]
                })
                `
			),
			{
				runScripts: "dangerously",
				pretendToBeVisual: true,
			}
		).window;

		waitForDocumentLoad(document).then(() => {
			expect(document.body.getElementsByTagName("h1").length).toBe(2);
			expect(
				document.body.getElementsByTagName("h1")[0].textContent
			).toBe("Hello WorldHello World");
			expect(
				document.body.getElementsByTagName("h1")[0].firstElementChild
					?.textContent
			).toBe("Hello World");
		});
	});

	// TODO: add more tests
});
