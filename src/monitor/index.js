import { emptyFunction } from '../base';
// https://github.com/qinmudi/vue-error-report/blob/master/src/plugins/index.js
class Monitor {
  constructor({ options = {}, reportUrl, timestamps, level, msg, ua, uniqueid, stack, data = {} }) {
    this.options = options;
    this.options.timestamps = timestamps;
    this.options.level = level;
    this.msg = msg;
    this.options.ua = navigator.userAgent;
    this.options.uniqueid = uniqueid;
    this.options.stack = stack;
    this.options.url = location.href;
    this.options.data = data;
    this.reportUrl = reportUrl;
  }

  processStackMsg(error) {
    const stack = error.stack
      .replace(/\n/gi, "")
      .replace(/\bat\b/gi, "@")
      .split("@")
      .slice(0, 9)
      .map(v => v.replace(/^\s*|\s*$/g, ""))
      .join("~")
      .replace(/\?[^:]+/gi, "");
    const msg = error.toString();
    if (stack.indexOf(msg) < 0) {
      stack = `${msg}@${stack}`;
    }
    return stack;
  }
  formatParams (data) {
	const arr = [];
	for (const name in data) {
		arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
	}
	return arr.join("&");
}
  proxyAjax() {
    const fakeAjax = Object.create(null);
    const context = this;
    fakeAjax.send = XMLHttpRequest.prototype.send;
    fakeAjax.open = XMLHttpRequest.prototype.open;

    XMLHttpRequest.prototype.open = function(method, url, boolean) {
      fakeAjax.open.apply(this, [method, url, boolean]);
      XMLHttpRequest.URL = url;
    };
    XMLHttpRequest.prototype.send = function(data) {
      const oq = this.onreadystatechange;
      this.onreadystatechange = function() {
        if (String(this.readyState) === "4") {
          if (this.status >= 200 && this.status < 300) {
            oq ? oq.apply(this, [data]) : null;
          }
        } else {
          context.options.msg = "ajax请求错误";
          context.options.stack = `错误码:${this.status}`;
          context.options.data = JSON.stringify({
            fileName: this.URL,
            category: "ajax",
            text: this.statusText,
            status: this.status
          });
          const mergeData = Object.assign({}, context.options);
          context.sendReport(mergeData);
        }
      };
    };
  }
  proxyError() {
      const context = this;
      window.addEventListener('error', e => {
          const target = e.target ? e.target : e.srcElement;
          context.options.msg = `${e.target.localName} is load error`;
          context.options.stack = `resource is not found`;
          context.options.data = JSON.stringify({
              tagName: e.target.localName,
              html: target.outerHTML,
              type: e.type,
              fileName: e.target.currentSrc,
              category: 'resource',
          });
          if (e.target != window) {
            const mergeData = Object.assign({}, context.options);
            context.sendReport(mergeData);
          }
      }, true);
      window.onerror = (msg, URL, line, col, error) => {
          if ( msg === 'Script error.' && !URL) {
              return false;
          }
          setTimeout(() => {
            const _col = col || (window.event || window.event.errorCharacter) || 0;
            if (error && error.stack) {
                context.options.msg = msg;
                context.options.stack = error.stack;
            } else {
                context.options.msg = msg;
                context.options.stack = '';
            }
            context.options.data = JSON.stringify({
                url: context.URL,
                fileName: URL,
                category: 'javascript',
                line: line,
                col: col,
            });
            const mergeData = Object.assign({}, context.options);
            context.sendReport(mergeData);
            return true;
          }, 0)
      };
      window.addEventListener('unhandledrejection', event => {
          context.options.msg  = event.reason;
          context.options.data = JSON.stringify({
              url: location.href,
              category: 'promise',
          });
          context.options.stack = 'promise is error';
          const mergeData = Object.assign({}, context.options);
          context.sendReport(mergeData);
          event.preventDefault();
      }, true);
  }
  sendReport(data) {
      const img = new Image();
      img.onload = img.onerror = () => {
          img = null;
      };
      const mergeData = Object.assign({}, this.options, data, {
          timestamps: new Date().getTime(),
          url: location.href,
      });
      img.src = `${this.reportUrl}?${this.formatParams(mergeData)}`;
  }
  stop() {
      this.sendReport = emptyFunction;
  }
}
