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
};
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
};
//遍历json对象中的值；
var json = [{dd:'haorooms',AA:'湛山寺',re1:123},{cccc:'dd',lk:'1qw'}];
for(var i=0,l=json.length;i<l;i++){
   for(var key in json[i]){
       alert(key+':'+json[i][key]);
   }
};
//jquery map()筛选遍历数组
$().ready(
   function(){
       var strings = ['0','1','2','3','4','S','6'];
       var values = $.map(strings,function(value){
               var result = new Number(value);
               return isNaN(result) ? null:result;
           }
       );
       for (key in values) {
           alert(values[key]);
       }
   }
);
