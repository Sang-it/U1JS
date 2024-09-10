import { View, ViewOptions } from "./view";

export class App {
	private view: View;

	constructor() {
		this.view = new View();
	}

	display(element: ViewOptions) {
		this.view.display(element);
	}
}

export type AppMethods = {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	[K in keyof App as App[K] extends Function ? K : never]: App[K];
};
