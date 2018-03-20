import { emptyFunction } from "../login/index";

export const fetch = ({
    url,
    method,
    data,
    header,
}) => new Promise((resolve, reject) => wx.request({
    url,
    data,
    method,
    header,
    success:resolve,
    fail: reject,
    complete: emptyFunction,
}));

export const getCurrentPageUrl = () => {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length-1];
    const url = currentPage.route;
    return url;
}

export const getCurrentPageUrlWithArgs = () => {
    const url = getCurrentPageUrl();
    const options = currentPage.options;
    let urlWithArgs = `${url}?`;
    for(let key in options){
        const value = options[key]
        urlWithArgs += `${key}=${value}&`;
    }
    urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length-1);
    return urlWithArgs;
}
