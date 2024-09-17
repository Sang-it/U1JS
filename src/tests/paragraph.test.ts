import { describe, expect, test } from "@jest/globals";
import { JSDOM } from "jsdom";
import { embedScript, LIB_PATH, waitForDocumentLoad } from "./utils";

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

	test("empty paragraph", () => {
		const { document } = new JSDOM(
			embedScript(
				LIB_PATH,
				`
                app.display({
                    type: "PARAGRAPH",
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
				""
			);
		});
	});

	test("deeply nested paragraphs", () => {
		const { document } = new JSDOM(
			embedScript(
				LIB_PATH,
				`
            app.display({
                type: "PARAGRAPH",
                textContent: "Parent",
                subElements: [{
                    type: "PARAGRAPH",
                    textContent: "Child",
                    subElements: [{
                        type: "PARAGRAPH",
                        textContent: "Grandchild"
                    }]
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
			expect(document.body.getElementsByTagName("p").length).toBe(3);
			expect(document.body.getElementsByTagName("p")[0].textContent).toBe(
				"ParentChildGrandchild"
			);
			expect(document.body.getElementsByTagName("p")[1].textContent).toBe(
				"ChildGrandchild"
			);
			expect(document.body.getElementsByTagName("p")[2].textContent).toBe(
				"Grandchild"
			);
		});
	});

	test("multiple sibling paragraphs", () => {
		const { document } = new JSDOM(
			embedScript(
				LIB_PATH,
				`
            app.display({
                type: "DIV",
                subElements: [
                    {
                        type: "PARAGRAPH",
                        textContent: "First Paragraph"
                    },
                    {
                        type: "PARAGRAPH",
                        textContent: "Second Paragraph"
                    }
                ]
            })
            `
			),
			{
				runScripts: "dangerously",
				pretendToBeVisual: true,
			}
		).window;

		waitForDocumentLoad(document).then(() => {
			const paragraphs = document.body.getElementsByTagName("p");
			expect(paragraphs.length).toBe(2);
			expect(paragraphs[0].textContent).toBe("First Paragraph");
			expect(paragraphs[1].textContent).toBe("Second Paragraph");
		});
	});

	test("paragraph with large textContent", () => {
		const largeText = "A".repeat(10000);
		const { document } = new JSDOM(
			embedScript(
				LIB_PATH,
				`
            app.display({
                type: "PARAGRAPH",
                textContent: "${largeText}"
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
				largeText
			);
		});
	});

	test("paragraph with special characters", () => {
		const { document } = new JSDOM(
			embedScript(
				LIB_PATH,
				`
            app.display({
                type: "PARAGRAPH",
                textContent: "Hello <World> & Everyone"
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
				"Hello <World> & Everyone"
			);
		});
	});
});
