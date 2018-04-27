const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
const isString = obj => typeof obj === 'string';
const isFunction = obj => typeof obj === 'function';
const isUndefined = obj => typeof obj === 'undefined';
const isNumber = obj => typeof obj === 'number';
const emptyFunction = () => {}
const nativeHasOwn = Object.prototype.hasOwnProperty;
export {
    isObject,
    isString,
    isFunction,
    isUndefined,
    isNumber,
    emptyFunction,
    nativeHasOwn
}