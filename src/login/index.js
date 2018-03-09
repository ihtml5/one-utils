export const emptyFunction = () => {}
// 获取登录code码
export const getLoginCode = () => new Promise((resolve, reject) => wx.login({
    success: resolve,
    fail: reject,
    complete: emptyFunction,
}));
export const getUserInfo = () => new Promise((resolve, reject) => wx.getUserInfo({
    success: resolve,
    fail: reject,
    complete: emptyFunction,
}));
export const getJWD = () => new Promise((resolve, reject) => {
    wx.getLocation({
        type: 'wgs84', 
        success: resolve,
        fail: reject,
        complete: emptyFunction,
    })
});

