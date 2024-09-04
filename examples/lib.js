'use strict';

const addDiv = (document, content) => {
    const div = document.createElement('div');
    div.textContent = content;
    document.body.appendChild(div);
};
window.onload = () => {
    addDiv(document, "Hello, World!");
};
//# sourceMappingURL=lib.js.map
