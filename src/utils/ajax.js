class Ajax {
  constructor(opts) {
    this.options = opts;
  }
  get(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    return this.handleRes(xhr);
  }
  post(url, params) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(
      Object.entries(params)
        .map((item) => item.join('='))
        .join('&')
    );
    return this.handleRes(xhr);
  }
  handleRes(xhr) {
    return new Promise((resolve, reject) => {
      xhr.onerror = () => {
        reject('请求错误');
      };
      xhr.ontimeout = () => {
        reject('请求超时');
      };
      xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
          resolve(JSON.parse(xhr.responseText));
        }
      };
    });
  }
}

export default new Ajax({ auth: 'admin' });
