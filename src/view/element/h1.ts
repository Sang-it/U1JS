import { Root } from "../root";
import { Element } from ".";
import { ViewOptions } from "..";
import { ViewOptionsToElement } from "../parser";

export interface H1Options {
	type: "H1";
	textContent: string;
	subElements?: ViewOptions[];
}

export class H1 {
	private textContent: string;
	private htmlElement: HTMLHeadingElement;
	private subElements: Element[];
	private viewOptionsToElement: ViewOptionsToElement;

	constructor(
		options: H1Options,
		public parent: Element | Root
	) {
		this.textContent = options.textContent;
		this.createHTMLElement();
		this.viewOptionsToElement = new ViewOptionsToElement();
		this.subElements = options.subElements
			? (this.viewOptionsToElement.parse(
					options.subElements,
					this
				) as H1[])
			: [];
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
			element.display();
		}
	}

	private createHTMLElement() {
		const element = document.createElement("h1");
		element.textContent = this.textContent;
		this.htmlElement = element;
	}
}
