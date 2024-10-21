import { Root } from "./element";
import { ElementParser, ElementOptions } from "../parser";

export class View {
	constructor(
		public root: Root,
		public optionsParser: ElementParser
	) {}

	add(options: ElementOptions[]) {
		const elements = this.optionsParser.parse(options, this.root);
		elements.forEach((element) => element.show());
	}
}

export * from "./element";
