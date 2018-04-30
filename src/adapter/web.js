import { isFunction } from '../base';

class WebAdapter {
    constructor(props = {}) {
        const { engine } = props;
        this.engine = engine;
    }
    querySelector(selector) {
        this.nodeList = this.engine.document.querySelector(`${selector}`);
        return this.nodeList;
    }
    querySelectorAll(selector) {
        this.nodeList = this.engine.document.querySelectorAll(`${selector}`);
        return this.nodeList;
    }
    getBoundingClientRect(callback) {
        if (isFunction(callback)) {
            callback(this.nodeList.getBoundingClientRect());
        }
        return this.nodeList.getBoundingClientRect();
    }
    fetch({
        method,
        url,
        body,
        header
    }) {
        return this.engine.fetch({
            url,
            method,
            body,
            header,
        });
    }
}

export default WebAdapter;