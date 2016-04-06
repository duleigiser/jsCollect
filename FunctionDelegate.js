 //定义全局变量；
    var calls = [];

    //注册方法；
    function need_register(){
        alert(1);
    }
    function a1(){
        alert(0)
    }
    function test(calls){
        calls.push(need_register,a1);
    }
    //执行代码
    function call_back(calls){

        calls = calls ||[];
        test(calls);
        if(calls.length === 0) return false;
        for(var i = 0,iLen = calls.length;i<iLen;i++){
            calls[i].apply();
        }
    }
    call_back(calls);
