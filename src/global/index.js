import { isWxAppEnv } from '../env';
const _oneUtilsGlobal = isWxAppEnv ? {
    wx,
    Page,
    App,
    Component,
} : {}
export default _oneUtilsGlobal;