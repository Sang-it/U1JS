import { Root, GenericElement } from "./view";

export type ElementOptions = Partial<HTMLElement> & {
	$tag: keyof HTMLElementTagNameMap;
	$childElements?: ElementOptions[];
};

export class ElementParser {
	parse(options: ElementOptions[], parent: GenericElement | Root) {
		return options.map((option) => this.parseOne(option, parent));
	}

	private parseOne(option: ElementOptions, parent: GenericElement | Root) {
		const { $tag, $childElements = [], ...rest } = option;
		const element = new GenericElement($tag, rest, parent);
		element.setChildElements(this.parse($childElements, element));
		return element;
	}
}
