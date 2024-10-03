import { Element } from ".";
import { Root } from "../root";

export class Button<T> {
	private subElements: Element[];
	private htmlElement: HTMLButtonElement;
	private className = `px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600
                             focus:outline-none focus:ring-2 focus:ring-blue-400 transition`;

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
		const element = document.createElement("button");
		element.className = this.className;
		Object.assign(element, { ...options }).removeAttribute("type");
		this.htmlElement = element;
	}
}
