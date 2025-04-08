class HTMLtag {
    constructor(tagName) {
        this.tagName = tagName;
        this.attributes = [];
    }

    createElement() {
        const element = document.createElement(this.tagName);

        for (let attr of this.attributes) {
            element.setAttribute(attr.name, attr.value);
        }

        if (this.textContent) {
            element.textContent = this.textContent;
        }

        return element;
    }

    setAttributes(attributes) {
        for (let item of attributes) {
            this.attributes.push(item);
        }
    }

    render(parent = document.body) {
        let element = this.createElement();
        parent.appendChild(element);
    }

    setTextContent(text) {
        this.textContent = text;
    }
}