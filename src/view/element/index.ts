import { Div } from "./div";
import { H1 } from "./h1";
import { Paragraph } from "./paragraph";

export type ParagraphOptions = {
	id: string;
	type: "PARAGRAPH";
	textContent: string;
	className: string;
	subElements?: ElementOptions[];
};

export type DivOptions = {
	type: "DIV";
	textContent: string;
	subElements?: ElementOptions[];
};

export type H1Options = {
	type: "H1";
	textContent: string;
	subElements?: ElementOptions[];
};

export type ElementOptions = ParagraphOptions | DivOptions | H1Options;

export type Element =
	| Paragraph<ParagraphOptions>
	| Div<DivOptions>
	| H1<H1Options>;

export * from "./paragraph";
export * from "./div";
export * from "./h1";
