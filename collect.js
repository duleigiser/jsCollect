//字符串反转；
// $ global
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
//jquery inArray()筛选遍历数组
$(document).ready(
	function(){
    var anArray = ['one','two','three'];
    var index = $.inArray('two',anArray);
    alert(index);//返回该值在数组中的键值，返回1
    alert(anArray[index]);//value is two
  }
);


//jQuery each()筛选遍历数组和JSON对象;
$(document).ready(
   function(){
       var anObject = {one:1,two:2,three:3};//对json数组each
       $.each(anObject,function(name,value) {
           alert(name);
           alert(value);
       });
       var anArray = ['one','two','three'];
       $.each(anArray,function(n,value){
           alert(n);
           alert(value);
       });
   }
);
//js获取url中参数返回为 json 对象;

function GetRequest(url) {
		var url = url.split('?')[1]; //获取url中"?"符后的字串
		var theRequest ={};
		strs = url.split("&");
		 console.log(strs);
		 for(var i = 0; i < strs.length; i ++) {
		   theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
		}
	return theRequest;
}


// 2016-03-21 11:10:10 转换成 2016年03月21日11点10分11秒
function re_time_zh(time){
    var timeArr = time.split(/[- :]/g)
    return timeArr[0]+'年' + timeArr[1]+'月'+ timeArr[2] + '日'+ timeArr[3]+"点"+ timeArr[4]+"分" + timeArr[3]+"秒";
}

//console.log(re_time_zh("2016-03-21 11:10:10"));



//get-element-by-id to 驼峰表达式 getElementById
function combo(str){
   var arr = str.split("-");
   for(var i = 1;i<arr.length;i++){
       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1,arr[i].length-1)

   }
   return arr.join("")

}
//combo("get-element-by-id");
//"getElementById"


//当年过去天数的百分比
var da = new Date();
var currentYear = da.getFullYear();
var nowTime = new Date().getTime();
var oldTime = new Date(currentYear +"-01-01").getTime();
var res = (nowTime - oldTime)/(60*60*24*1000*365); 
console.log(res.toFixed(2));



//通过this来实现代码的复用;
function User(name) {
    this.name = name;
    this.display = function() {
        console.log(this.name);
    }
}
var user1 = new User("dulei");//初始化后才能被引用
user1.display();// output ·· dulei
var foo = {
    bar: user1.display,
    name: 'foobar'
};
foo.bar(); // output ··  foobar;


//！！！！！！在js拼接  函数中传递json对象 需要序列化为字符串 ！
//var fun ="onclick='chuantou("+JSON.stringify(d)+")'";

//对json对象进行排序
var json_sort={
    init:function (array, param, sortby) {
        this.obj = array;
        this.parm = param;
        this.b = sortby;
    },
    sort:function () {
        var _this = this;
        var down = function (x, y) {
            return (eval("x." + _this.parm) > eval("y." + _this.parm)) ? -1 : 1
        }//通过eval对json对象的键值传参
        var up = function (x, y) {
            return (eval("x." + _this.parm) < eval("y." + _this.parm)) ? -1 : 1
        };
        this.b == "down"? this.obj.sort(down):this.obj.sort(up);
        return this.obj;
    }
};
var p = [
  {name:"kitty", age:12, price:190},
  {name:"sonny", age:9, price:390},
  {name:"jake", age:13, price:42},
  {name:"fun", age:24, price:210}
];
  function _temp() {
    this.init.apply(this, arguments)
}
_temp.prototype = json_sort;
var sort1 = new _temp(); //建立对象
/*
* @param arguments[0] 要处理的json 对象
* @param arguments[1] [attr] 
* @param arguments[2] "up"/"down"  
* 
*/
sort1.init(p, "age", "up");//初始化参数
sort1.sort()
//清除字符串两边的空格
String.prototype.trim = function(){return this.replace(/^s+|s+$/g, "");};
//获取数组里的最大值和最小值
var  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);

var argArray = Array.prototype.slice.call(arguments);
