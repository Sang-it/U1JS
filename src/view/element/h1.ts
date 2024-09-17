import { Element } from ".";
import { Root } from "../root";

export class H1<T> {
	private subElements: Element[];
	private htmlElement: HTMLHeadingElement;

	constructor(
		options: T,
		public parent: Element | Root
	) {
		this.createHTMLElement(options);
	}

	show() {
		this.parent.appendChild(this.htmlElement);
		if (this.subElements) {
			this.showSubElements();
		}
	}

	appendChild(element: HTMLElement) {
		this.htmlElement.appendChild(element);
	}

	setSubElements(subElements: Element[]) {
		this.subElements = subElements;
	}

	private showSubElements() {
		for (const element of this.subElements) {
			element.show();
		}
	}

	private createHTMLElement(options: T) {
		const element = document.createElement("h1");
		Object.assign(element, { ...options });
		this.htmlElement = element;
	}
}
