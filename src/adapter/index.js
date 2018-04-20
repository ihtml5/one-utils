import { getEnv, ENVIRONMENTS } from "../env";
import webAdapter from './web';
import wxappAdapter from './wx';

const env = getEnv();
let AdapterIns = null;
if (env === ENVIRONMENTS.web) {
    AdapterIns = new webAdapter({
        engine: window,
    });
}
if (env === ENVIRONMENTS.wxapp) {
    AdapterIns = new wxappAdapter({
        engine: wx,
    });
}

export default AdapterIns;