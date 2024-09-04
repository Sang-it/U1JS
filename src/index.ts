const addDiv = (document: Document, content: string) => {
	const div = document.createElement("div");
	div.textContent = content;
	document.body.appendChild(div);
};

window.onload = () => {
	addDiv(document, "Hello, World!");
};
