import { getEnv, ENVIRONMENTS } from "../env";
import webAdapter from './web';
import wxappAdapter from './wx';
import $log from '../log';

const createAdapter = ({
    engine,
}) => {
    const env = getEnv({
        engine,
    });
    $log(env, ENVIRONMENTS, engine);
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
        $log('AdapterIns:::', AdapterIns);
    }
    return AdapterIns;
}

export default createAdapter;