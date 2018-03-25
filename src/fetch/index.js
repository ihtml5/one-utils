import { emptyFunction } from "../login/index";

export const fetch = ({ url, method, data, header }) =>
  new Promise((resolve, reject) =>
    wx.request({
      url,
      data,
      method,
      header,
      success: resolve,
      fail: reject,
      complete: emptyFunction
    })
  );

export const promisfy = api => (options, ...params) =>
  new Promise((resolve, reject) =>
    api(
      Object.assign({}, options, { success: resolve, fail: reject }),
      ...params
    )
  );
