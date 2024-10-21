export class Root {
	private rootElement: HTMLElement;

	constructor() {
		this.rootElement = window.document.body;
	}

	appendChild(element: HTMLElement) {
		this.rootElement.appendChild(element);
	}
}
