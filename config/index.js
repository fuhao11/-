

// 全局配置文件

let HOST = '';

let ENV = 'DEV'; // 设置环境 测试 DEV, 正式环境 PROD

if (ENV === 'PROD'){
  // 正式环境 host
  HOST = 'http://test.ehaier.com';
}else{
  // 测试环境 host
  HOST = 'http://rap.test.ehaier.com/mockjsdata/14';
}


module.exports = {
  HOST: HOST
}
