import { Element } from ".";
import { Root } from "../root";

export type Logo = {
    img: string;
    href: string;
    textContent: string;
}

export type ButtonLink = {
    textContent: string;
    href: string;
};

export type NavLink = {
    href: string;
    textContent: string;
};

export type BaseNavOptions = {
    logo: Logo;
    links: NavLink[];
    buttons?: ButtonLink[];
};

export class Nav<T extends BaseNavOptions> {
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
        const element = document.createElement("nav");
        element.className = `bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600`;

        const mainDiv = document.createElement("div");
        mainDiv.className = `max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`;

        const logo = document.createElement("a");
        logo.href = options.logo.href;
        logo.className = `flex items-center space-x-3 rtl:space-x-reverse`;

        const img = document.createElement("img");
        img.src = options.logo.img;
        img.className = `h-8`;
        img.alt = "Flowbite Logo";

        const span = document.createElement("span");
        span.className = `self-center text-2xl font-semibold whitespace-nowrap dark:text-white`;
        span.textContent = options.logo.textContent;

        logo.appendChild(img);
        logo.appendChild(span);
        mainDiv.appendChild(logo);

        const buttonGroup = document.createElement("div");
        buttonGroup.className = `flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse`;
        for (const butttonLink of options.buttons || []) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = `text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
            button.textContent = butttonLink.textContent;
            buttonGroup.appendChild(button);
        }
        mainDiv.appendChild(buttonGroup);

        const linkGroup = document.createElement("div");
        linkGroup.className = `items-center justify-between hidden w-full md:flex md:w-auto md:order-1`;
        linkGroup.id = "navbar-sticky";

        const ul = document.createElement("ul");
        ul.className = `flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`;

        for (const link of options.links) {
            const li = document.createElement("li");

            const a = document.createElement("a");
            a.href = link.href;
            a.className = `block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`;
            a.textContent = link.textContent;

            li.appendChild(a);
            ul.appendChild(li);
        }

        linkGroup.appendChild(ul);
        mainDiv.appendChild(linkGroup);
        element.appendChild(mainDiv);

        Object.assign(element, { ...options }).removeAttribute("type");
        this.htmlElement = element;
    }
}
