const isWxAppEnv = !wx || !Page || !App;
const App = isWxAppEnv ? getApp() : void 0;
export {
    isWxAppEnv,
    App,
}