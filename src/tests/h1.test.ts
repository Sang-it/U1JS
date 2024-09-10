import { JSDOM } from "jsdom";
import { describe, expect, test } from "@jest/globals";
import { embedScript, waitForDocumentLoad, LIB_PATH } from "./utils";

describe.skip("Element: H1", () => {
	test("h1 can be displayed properly", () => {
		const { document } = new JSDOM(
			embedScript(
				LIB_PATH,
				`
                app.display({
                    type: "DIV",
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
                    type: "DIV",
                    textContent: "Hello World",
                    subElements: [{
                        type: "DIV",
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
