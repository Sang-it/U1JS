import { ElementOptions } from "./element";
import { OptionsToElement } from "./parser";
import { Root } from "./root";

export * from "./element";
export * from "./root";

export class View {
	private root: Root;
	private optionsParser: OptionsToElement;

	constructor() {
		this.root = new Root();
		this.optionsParser = new OptionsToElement();
	}

	addOne(option: ElementOptions) {
		const element = this.optionsParser.parseOne(option, this.root);
		element.show();
	}

	addMany(options: ElementOptions[]) {
		const elements = this.optionsParser.parseMany(options, this.root);
		for (const element of elements) {
			element.show();
		}
	}
}
