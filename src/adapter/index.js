import { ENVIRONMENTS } from '../env';
import { isObject } from '../types';
import Core from '../dom';

class Adapter {
    constructor() {
        this.core = Core;
    }
    inject(...rest) {
        if (rest.length === 1 && isObject(rest[0])) {
            const keys = Object.keys(rest[0]);
            keys.forEach(key => {
                this.core[`${key}`] = rest[0][key](ENVIRONMENTS);
            })
        }
        if (rest.length === 2) {
            this.core[`${rest[0]}`] = rest[1](ENVIRONMENTS);
        }
    }
}

export default new Adapter();