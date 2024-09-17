import { View, ElementOptions } from "./view";

export type EventMap = {
	click: MouseEvent;
};

export class App {
	private view: View;

	constructor() {
		this.view = new View();
	}

	display(options: ElementOptions | ElementOptions[]): void {
		if (Array.isArray(options)) {
			this.view.addMany(options);
		} else {
			this.view.addOne(options);
		}
	}

	event<K extends keyof EventMap>(
		element_id: string,
		eventType: K,
		callback: (ev: EventMap[K]) => void
	) {
		const element = document.getElementById(element_id);
		if (element) {
			element.addEventListener(eventType, (ev: EventMap[K]) =>
				callback(ev)
			);
		} else {
			console.error(`Element with id ${element_id} not found`);
		}
	}
}

export type AppMethods = {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	[K in keyof App as App[K] extends Function ? K : never]: App[K];
};
