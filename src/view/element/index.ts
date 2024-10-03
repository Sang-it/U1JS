import { Div } from "./div";
import { H1 } from "./h1";
import { Paragraph } from "./paragraph";
import { Button } from "./button";
import { Card } from "./card";
import { ButtonLink, Logo, Nav, NavLink } from "./nav";

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

export type ButtonOptions = {
	type: "BUTTON";
	textContent: string;
};

export type CardOptions = {
	type: "CARD";
	subElements?: ElementOptions[];
};

export type NavOptions = {
	type: "NAV";
	logo: Logo;
	links: NavLink[];
	buttons?: ButtonLink[];
};

export type ElementOptions =
	| ParagraphOptions
	| DivOptions
	| H1Options
	| ButtonOptions
	| CardOptions
	| NavOptions;

export type Element =
	| Paragraph<ParagraphOptions>
	| Div<DivOptions>
	| H1<H1Options>
	| Button<ButtonOptions>
	| Card<CardOptions>
	| Nav<NavOptions>;

export * from "./paragraph";
export * from "./div";
export * from "./h1";
export * from "./button";
export * from "./card";
export * from "./nav";
