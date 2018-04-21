import { getEnv, ENVIRONMENTS } from "../env";
import webAdapter from './web';
import wxappAdapter from './wx';
import { create } from "domain";

const createAdapter = ({
    engine,
}) => {
    const env = getEnv({
        engine,
    });
    let AdapterIns = null;
    if (env === ENVIRONMENTS.web) {
        AdapterIns = new webAdapter({
            engine,
        });
    }
    if (env === ENVIRONMENTS.wxapp) {
        AdapterIns = new wxappAdapter({
            engine,
        });
    }
    return AdapterIns;
}

export default  createAdapter;