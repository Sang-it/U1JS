import { Root } from "./root";

export type Element = Paragraph;

export type ParagraphOptions = {
	type: "PARAGRAPH";
	textContent: string;
};

export class Paragraph {
	private text: string;
	private htmlElement: HTMLElement;

	constructor(
		options: ParagraphOptions,
		public parent: Element | Root
	) {
		this.text = options.textContent;
		this.createHTMLElement();
	}

	display() {
		this.parent.appendChild(this.htmlElement);
	}

	appendChild(element: HTMLElement) {
		this.htmlElement.appendChild(element);
	}

	private createHTMLElement() {
		const element = document.createElement("p");
		element.textContent = this.text;
		this.htmlElement = element;
	}
}
