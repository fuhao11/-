
let config = require('./index.js');
let HOST = config.HOST;

function FullUrl(route, host = HOST) {
  return `${host}/${route}`;
}

module.exports = {
  // 测试链接
  testUrl: FullUrl("v3/platform/web/token/getToken.json"),
};