const promisfy = api => (options, ...params) =>
  new Promise((resolve, reject) =>
    api(
      Object.assign({}, options, { success: resolve, fail: reject }),
      ...params
    )
  );

export default promisfy;