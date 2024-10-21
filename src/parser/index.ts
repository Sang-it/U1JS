import { $Root, $Element } from "../element";

export type $ElementOptions = Partial<HTMLElement> & {
	$tag: keyof HTMLElementTagNameMap;
	$childElements?: $ElementOptions[];
};

export class $ElementParser {
	parse(options: $ElementOptions[], parent: $Element | $Root) {
		return options.map((option) => this.parseOne(option, parent));
	}

	private parseOne(option: $ElementOptions, parent: $Element | $Root) {
		const { $tag, $childElements = [], ...rest } = option;
		const element = new $Element($tag, rest, parent);
		element.setChildElements(this.parse($childElements, element));
		return element;
	}
}
