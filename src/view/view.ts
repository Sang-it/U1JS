import { ParagraphOptions, Paragraph } from "./elements";
import { Root } from "./root";

export type ViewOptions = ParagraphOptions;

export class View {
	private root: Root;

	constructor() {
		this.root = new Root();
	}

	display(options: ViewOptions) {
		this.parseViewOptions(options).display();
	}

	private parseViewOptions(options: ViewOptions) {
		switch (options.type) {
			case "PARAGRAPH":
				return new Paragraph(options, this.root);
			default:
				throw new Error("Invalid view type");
		}
	}
}
