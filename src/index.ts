import { App, AppMethods } from "./app";

declare global {
	interface Window {
		app: App | AppMethods;
	}
}

window.app = {
	display: (element) => {
		window.addEventListener("DOMContentLoaded", () => {
			(window.app as App).display(element);
		});
	},
	event: (id, eventType, callback) => {
		window.addEventListener("DOMContentLoaded", () => {
			(window.app as App).event(id, eventType, callback);
		});
	},
};

window.addEventListener("DOMContentLoaded", () => {
	window.app = new App();
});
