# jsCollect

    收集一些JS function
   
## 快速排序：
    
    {
        quickSort: function(array) {
            var i = 0;
            var j = array.length - 1;
            var Sort = function(i, j) {
            if (i == j) {
                return
            };
            var key = array[i];
            var stepi = i; // 记录开始位置
            var stepj = j; // 记录结束位置
            while (j > i) {
                // j <<-------------- 向前查找
                if (array[j] >= key) {
                    j--;
                } else {
                    array[i] = array[j]
                    //i++ ------------>>向后查找
                    while (j > ++i) {
                        if (array[i] > key) {
                            array[j] = array[i];
                            break;
                        }
                    }
                }
            }
            // 如果第一个取出的 key 是最小的数
            if (stepi == i) {
                Sort(++i, stepj);
                return;
            }
            // 最后一个空位留给 key
            array[i] = key;
            // 递归
            Sort(stepi, i);
            Sort(j, stepj);
        }
        Sort(i, j);
        return array;
    }
## 冒泡排序：
    
    bubbleSort: function(array) {
        var i = 0,
        len = array.length,
        j, d;
        for (; i < len; i++) {
            for (j = 0; j < len; j++) {
                if (array[i] < array[j]) {
                    d = array[j];
                    array[j] = array[i];
                    array[i] = d;
                }
            }
        }
        return array;
    }
## 字符串反转

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
## 匹配区间


    function find(array,val){
        //如果值小于revenue最小的值时，则奖励0
        if(val  <   Math.min.apply(null,array)){
            return 0;
        };
        //如果值大于revenue最大的值时，则奖励最高一档
        if(val  >   Math.max.apply(null,array)){
            return array.length-1;
        };
        var idx =   0,
            i   =   0,
            j   =   array.length;
        for(;i<j;i++){
            if(array[i] > val){
                idx = i;
                break;
            };
        };
        return idx;
      };
