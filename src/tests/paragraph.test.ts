import { JSDOM } from "jsdom";
import { describe, expect, test } from "@jest/globals";
import { embedScript, waitForDocumentLoad, LIB_PATH } from "./utils";

describe("Element: Paragraph", () => {
	test("paragraph can be displayed properly", () => {
		const { document } = new JSDOM(
			embedScript(
				LIB_PATH,
				`
                app.display({
                    type: "PARAGRAPH",
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
			expect(document.body.getElementsByTagName("p").length).toBe(1);
			expect(document.body.getElementsByTagName("p")[0].textContent).toBe(
				"Hello World"
			);
		});
	});

	test("paragraphs can be nested", () => {
		const { document } = new JSDOM(
			embedScript(
				LIB_PATH,
				`
                app.display({
                    type: "PARAGRAPH",
                    textContent: "Hello World",
                    subElements: [{
                        type: "PARAGRAPH",
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
			expect(document.body.getElementsByTagName("p").length).toBe(2);
			expect(document.body.getElementsByTagName("p")[0].textContent).toBe(
				"Hello WorldHello World"
			);
			expect(
				document.body.getElementsByTagName("p")[0].firstElementChild
					?.textContent
			).toBe("Hello World");
		});
	});

	// TODO: add more tests
});
