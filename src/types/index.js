const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
const isString = obj => typeof obj === 'string';
const isFunction = obj => typeof obj === 'function';
const isUndefined = obj => typeof obj === 'undefined';

export {
    isObject,
    isString,
    isFunction,
    isUndefined,
}