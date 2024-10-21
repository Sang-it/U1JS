import { $Root } from "./root";

export class $Element {
	private element: HTMLElement;
	private childElements: $Element[];

	constructor(
		tag: keyof HTMLElementTagNameMap,
		options: Partial<HTMLElement>,
		public parent: $Element | $Root
	) {
		this.element = document.createElement(tag);
		Object.assign(this.element, options);
	}

	show() {
		this.parent.appendChild(this.element);
		this.childElements.forEach((childElement) => childElement.show());
	}

	appendChild(element: HTMLElement) {
		this.element.appendChild(element);
	}

	setChildElements(childElements: $Element[]) {
		this.childElements = childElements;
	}
}
