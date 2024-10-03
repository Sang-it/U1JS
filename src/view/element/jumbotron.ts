import { ButtonLink, Element } from ".";
import { Root } from "../root";

export class Jumbotron<T extends { extendClassName?: string, buttonLink: ButtonLink, title: string, subTitle: string }> {
    private subElements: Element[];
    private htmlElement: HTMLElement;

    constructor(
        options: T,
        public parent: Element | Root
    ) {
        this.createHTMLElement(options);
    }

    show() {
        this.parent.appendChild(this.htmlElement);
        if (this.subElements) {
            this.showSubElements();
        }
    }

    appendChild(element: HTMLElement) {
        this.htmlElement.appendChild(element);
    }

    setSubElements(subElements: Element[]) {
        this.subElements = subElements;
    }

    private showSubElements() {
        for (const element of this.subElements) {
            element.show();
        }
    }

    private createHTMLElement(options: T) {
        const element = document.createElement("section");
        element.className = "bg-white dark:bg-gray-900"

        if (options.extendClassName) {
            element.classList.add(options.extendClassName);
        }

        const contianer = document.createElement("div");
        contianer.className = "px-4 mx-auto max-w-screen-xl text-center lg:py-16"

        const title = document.createElement("h1");
        title.className = "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        title.textContent = options.title;

        const subTitle = document.createElement("p");
        subTitle.className = "mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
        subTitle.textContent = options.subTitle;

        const button = document.createElement("a");
        button.className = "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        button.textContent = options.buttonLink.textContent;
        button.href = options.buttonLink.href;

        contianer.appendChild(title);
        contianer.appendChild(subTitle);
        contianer.appendChild(button);

        element.appendChild(contianer);

        Object.assign(element, { ...options }).removeAttribute("type");
        this.htmlElement = element;
    }
}
