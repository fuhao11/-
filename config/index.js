

// 全局配置文件

let HOST = '';

let ENV = 'DEV'; // 设置环境 测试 DEV, 正式环境 PROD

if (ENV === 'PROD'){
  HOST = 'http://test.ehaier.com';
}else{
  HOST = 'http://m.ehaier.com';
}


module.exports = {
  HOST: HOST
}
