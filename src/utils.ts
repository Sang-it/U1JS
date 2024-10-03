export function attachScriptToHTML(src: string) {
	const script = document.createElement("script");
	script.src = src;
	document.head.appendChild(script);
}
