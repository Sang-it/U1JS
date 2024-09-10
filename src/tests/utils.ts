import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export const LIB_PATH = resolve(__dirname, "../../bundle/lib.js");

export const embedScript = (libPath: string, source: string) => {
	const lib = readFileSync(libPath, "utf8");
	return `
            <html>
                <head>
                    <script> ${lib} </script>
                </head>
                <body>
                </body>
                <script>
                    ${source}
                </script>
            </html>
            `;
};

export const waitForDocumentLoad = (document: Document): Promise<void> => {
	return new Promise((resolve) => {
		document.onload = () => {
			resolve();
		};
	});
};
