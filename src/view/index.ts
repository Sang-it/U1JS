import { ParagraphOptions } from "./element";
import { ViewOptionsToElement } from "./parser";
import { Root } from "./root";

export * from "./element";
export * from "./root";

export type ViewOptions = ParagraphOptions;

export class View {
	private root: Root;
	private viewOptionsToElement: ViewOptionsToElement;

	constructor() {
		this.root = new Root();
		this.viewOptionsToElement = new ViewOptionsToElement();
	}

	display(options: ViewOptions | ViewOptions[]) {
		const elements = this.viewOptionsToElement.parse(options, this.root);
		if (Array.isArray(elements)) {
			for (const element of elements) {
				element.display();
			}
		} else {
			elements.display();
		}
	}
}
