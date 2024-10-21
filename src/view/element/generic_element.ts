import { Root } from "./root";

export class GenericElement {
	private element: HTMLElement;
	private childElements: GenericElement[];

	constructor(
		tag: keyof HTMLElementTagNameMap,
		options: Partial<HTMLElement>,
		public parent: GenericElement | Root
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

	setChildElements(childElements: GenericElement[]) {
		this.childElements = childElements;
	}
}
