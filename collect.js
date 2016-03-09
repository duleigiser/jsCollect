//字符串反转；
function reverse(str){
  return str.split('').reverse().join('')
}
function reverse1(str){
  var res='';
  for(var i = 0; i<str.length;i++){
      res+=str[str.length-1-i];
  }
  return res;
}
//提取url字符串到json数据；
function queryString(url){
  var reg_urlc = /^[^\?]+\?([\w\W]+)$/,
      reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
      arr_url = reg_url.exec(url),
      res = {};
      if(arr_url && arr_url[1]) {
        var str_para= arr_url[1],result;
        while((result = reg_para.exec(str_para)) != null){
          res[result[1]] = result[2];
        }
      }
  return res;     
}
