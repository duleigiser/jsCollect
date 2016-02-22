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
