

let obj = function (
  url, 
  params = {}, 
  method = "GET",
  header = {'content-type': 'application/json'}
){
  return new Promise((resolve, reject)=>{
    console.log(`params: ${JSON.stringify(params)}`);
    console.log(url);
    console.log(`header: ${JSON.stringify(header)}`);
    wx.request({
      url: url,
      data: params,
      method: method,
      header: header,
      success: function (res) {
        if(res.statusCode == 200){
          console.log(res);
          resolve(res.data);
        }else{
          console.log(res.statusCode);
          reject(res);
        }
      },
      fail: function (err) {
        console.log(err)
        reject(err);
      },
    })

  });
}

module.exports = obj;