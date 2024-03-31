class screen {
    document;
    elements = {};
    values = {};
    styles = {};
    constructor(width, height) {
        this.document = new so_document();
        this.document.width = width;
        this.document.height = height;
    }
    pushElement(element, name) {
        if (this.elements[name]) {
            throw new Error("Element with name " + name + " already exists.");
        }
        this.elements[name] = element;
    }
    pushValue(value) {
        if (this.values[value.name]) {
            throw new Error(
                "Value with name " + value.name + " already exists."
            );
        }
        this.values.push(value);
    }
    pushStyle(style) {
        if (this.styles[style.name]) {
            throw new Error(
                "Style with name " + style.name + " already exists."
            );
        }
        this.styles.push(style);
    }
    appendAllChildren(element, domElement) {
        element.children.forEach((children) => {
            let child = children.domElement;
            domElement.appendChild(child);
            this.appendAllChildren(children, child);
        });
    }
    firstRender() {
        let DOM = document.createElement("div");
        DOM.style.width = this.document.width;
        DOM.style.height = this.document.height;
        this.appendAllChildren(this.document, DOM);
    }
}
