import { Root } from "./root";

export type Element = Paragraph;

export type ParagraphOptions = {
	type: "PARAGRAPH";
	textContent: string;
};

export class Paragraph {
	private textContent: string;
	private htmlElement: HTMLElement;

	constructor(
		options: ParagraphOptions,
		public parent: Element | Root
	) {
		this.textContent = options.textContent;
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
		element.textContent = this.textContent;
		this.htmlElement = element;
	}
}
