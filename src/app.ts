import { View, Root } from "./view";
import { ElementOptions, ElementParser } from "./parser";

export class App {
	private view: View;

	constructor() {
		this.view = new View(new Root(), new ElementParser());
	}

	display(options: ElementOptions | ElementOptions[]) {
		this.view.add(Array.isArray(options) ? options : [options]);
	}

	event<K extends keyof HTMLElementEventMap>(
		element_id: string,
		eventType: K,
		callback: (ev: HTMLElementEventMap[K]) => void
	) {
		const element = document.getElementById(element_id);
		if (element) {
			element.addEventListener(eventType, (ev: HTMLElementEventMap[K]) =>
				callback(ev)
			);
			return;
		}

		console.error(`Element with id ${element_id} not found`);
	}
}

export type AppMethods = {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	[K in keyof App as App[K] extends Function ? K : never]: App[K];
};
