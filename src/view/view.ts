import { ParagraphOptions, Paragraph, Element } from "./elements";
import { Root } from "./root";

export type ViewOptions = ParagraphOptions;

export class View {
	private root: Root;

	constructor() {
		this.root = new Root();
	}

	display(options: ViewOptions | ViewOptions[]) {
		if (Array.isArray(options)) {
			for (const element of this.parseViewOptionsArray(options)) {
				element.display();
			}
		} else {
			this.parseViewOptions(options).display();
		}
	}

	private parseViewOptions(options: ViewOptions) {
		switch (options.type) {
			case "PARAGRAPH":
				return new Paragraph(options, this.root);
			default:
				throw new Error("Invalid view type");
		}
	}

	private parseViewOptionsArray(options: ViewOptions[]) {
		const elements: Element[] = [];
		for (const option of options) {
			elements.push(this.parseViewOptions(option));
		}
		return elements;
	}
}
