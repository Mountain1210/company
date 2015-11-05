/* 
* @Author: anchen
* @Date:   2015-07-29 15:28:45
* @Last Modified by:   anchen
* @Last Modified time: 2015-07-29 16:46:30
*/
/**
升序数据
 */

    function sort2(){   
        var arr = [4,2,7,3,1,-1,0];
        //控制比较几次
        
        for(var x= 0; x < arr.length-1;x ++){
            console.log(arr.length-1);
            console.log(x);
            for(var i = 0; i < arr.length - 1 - x; i++){
                console.log("===============");
                console.log( arr.length - 1-x);
                console.log("===============");
                if(arr[i] > arr[i + 1]){
                    var temp  = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                }
            }
        }
        console.log(arr);
    }
    sort2();