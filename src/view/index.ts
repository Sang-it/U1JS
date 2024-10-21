import { $Root } from "../element";
import { $ElementParser, $ElementOptions } from "../parser";

export class $View {
	constructor(
		private root: $Root,
		private elementParser: $ElementParser
	) {}

	add(options: $ElementOptions[]) {
		const elements = this.elementParser.parse(options, this.root);
		elements.forEach((element) => element.show());
	}
}
