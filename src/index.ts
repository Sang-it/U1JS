import { App, AppMethods } from "./app";
// import { attachScriptToHTML } from "./utils";

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
	// attachScriptToHTML("https://cdn.tailwindcss.com");
	window.app = new App();
});
