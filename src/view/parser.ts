import { Root, ElementOptions } from ".";
import { Div, Element, H1, Paragraph, Button, Card, Nav } from "./element";
import { Jumbotron } from "./element/jumbotron";

export class OptionsToElement {
    parseOne(option: ElementOptions, parent: Element | Root) {
        switch (option.type) {
            case "PARAGRAPH": {
                const paragraph = new Paragraph(option, parent);
                if (option.subElements) {
                    paragraph.setSubElements(
                        this.parseMany(option.subElements, paragraph)
                    );
                }
                return paragraph;
            }
            case "DIV": {
                const div = new Div(option, parent);
                if (option.subElements) {
                    div.setSubElements(this.parseMany(option.subElements, div));
                }
                return div;
            }
            case "H1": {
                const h1 = new H1(option, parent);
                if (option.subElements) {
                    h1.setSubElements(this.parseMany(option.subElements, h1));
                }
                return h1;
            }
            case "BUTTON": {
                const button = new Button(option, parent);
                return button;
            }
            case "CARD": {
                const card = new Card(option, parent);
                if (option.subElements) {
                    card.setSubElements(
                        this.parseMany(option.subElements, card)
                    );
                }
                return card;
            }
            case "NAV": {
                const nav = new Nav(option, parent);
                return nav;
            }
            case "JUMBOTRON": {
                const jumbotron = new Jumbotron(option, parent);
                return jumbotron;
            }
            default:
                throw new Error("Invalid view type");
        }
    }

    parseMany(options: ElementOptions[], parent: Element | Root) {
        const elements: Element[] = [];
        for (const option of options) {
            elements.push(this.parseOne(option, parent));
        }
        return elements;
    }
}
