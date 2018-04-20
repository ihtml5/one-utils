import adapter from '../adapter';
import dom from '../dom';

class Core {
    constructor({
        name,
        engine,
    }) {
        this.name = name;
        this.engine = engine;
    }
    init({
        name,
        engine,
    }) {
        this.name = name;
        this.engine = engine;  
    }
}