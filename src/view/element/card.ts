import { Element } from ".";
import { Root } from "../root";

export class Card<T> {
	private subElements: Element[];
	private htmlElement: HTMLDivElement;
	private className = `block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white`;

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
		const element = document.createElement("div");
		element.className = this.className;
		Object.assign(element, { ...options }).removeAttribute("type");
		this.htmlElement = element;
	}
}
