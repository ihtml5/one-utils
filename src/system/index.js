/*
desc: 获取设备系统能力
from: https://mp.weixin.qq.com/debug/wxadoc/dev/api/systeminfo.html#wxgetsysteminfoobject
*/
export const getSystemInfo = sync => new Promise((resolve, reject) => wx[`getSystemInfo${sync ? 'Sync' : ''}`]({
    success: resolve,
    fail: reject,
}));