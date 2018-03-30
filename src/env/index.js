const isWxAppEnv = !wx || !Page || !App;
const AppInfo = isWxAppEnv ? getApp() : void 0;
const page = (config = {}) => (isWxAppEnv ? Page(config) : (config) => {});
export {
    isWxAppEnv,
    AppInfo,
    page,
}