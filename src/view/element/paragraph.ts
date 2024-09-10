import { Root } from "../root";
import { Element } from ".";
import { ViewOptions } from "..";
import { ViewOptionsToElement } from "../parser";

export type ParagraphOptions = {
	type: "PARAGRAPH";
	textContent: string;
	subElements?: ViewOptions[];
};

export class Paragraph {
	private textContent: string;
	private htmlElement: HTMLElement;
	private subElements: Element[];
	private viewOptionsToElement: ViewOptionsToElement;

	constructor(
		options: ParagraphOptions,
		public parent: Element | Root
	) {
		this.textContent = options.textContent;
		this.createHTMLElement();
		this.viewOptionsToElement = new ViewOptionsToElement();
		if (options.subElements) {
			const elements = this.viewOptionsToElement.parse(
				options.subElements,
				this
			);
			if (Array.isArray(elements)) {
				this.subElements = elements;
			}
		}
	}

	display() {
		this.parent.appendChild(this.htmlElement);
		if (this.subElements) {
			this.displaySubElements();
		}
	}

	appendChild(element: HTMLElement) {
		this.htmlElement.appendChild(element);
	}

	displaySubElements() {
		for (const element of this.subElements) {
			this.appendChild(element.htmlElement);
		}
	}

	private createHTMLElement() {
		const element = document.createElement("p");
		element.textContent = this.textContent;
		this.htmlElement = element;
	}
}
