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
