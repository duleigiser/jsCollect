
//获取本年过去了多少天
//return 30-etc;
function dayPassOfYear(){
    var d       = new Date();
    var nowYear = d.getFullYear();
    var nowTime = new Date().getTime();
    var oldTime = new Date(nowYear +"-01-01").getTime();
    return parseInt((nowTime - oldTime)/(60*60*24*1000));
}
//获取本年共多少天
//@para pYear(number) 年份
//return 365||366;
function dayOfYear(pYear){
    var d         = new Date();
    if(!pYear){
       pYear     = d.getFullYear();
    }
    
    var dayOfYear = "";
    if(!isNaN(parseInt(pYear))){
        if((pYear%4==0 && pYear%100!=0)||(pYear%100==0 && pYear%400==0)){
            dayOfYear = 366;
        }else{
            dayOfYear =365;
        }
    }
    return dayOfYear;
}
//  LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?是否为闰年
function leap_gregorian(year) {
	return ((year % 4) == 0) &&
		(!(((year % 100) == 0) && ((year % 400) != 0)));
}



