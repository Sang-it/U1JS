import { JSDOM } from "jsdom";
import { describe, expect, test } from "@jest/globals";
import { embedScript, waitForDocumentLoad, LIB_PATH } from "./utils";

describe("Element: Div", () => {
	test("div can be displayed properly", () => {
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
			expect(document.body.getElementsByTagName("div").length).toBe(1);
			expect(
				document.body.getElementsByTagName("div")[0].textContent
			).toBe("Hello World");
		});
	});

	test("divs can be nested", () => {
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
			expect(document.body.getElementsByTagName("div").length).toBe(2);
			expect(
				document.body.getElementsByTagName("div")[0].textContent
			).toBe("Hello WorldHello World");
			expect(
				document.body.getElementsByTagName("div")[0].firstElementChild
					?.textContent
			).toBe("Hello World");
		});
	});

	// TODO: add more tests
});
