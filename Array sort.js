/* 
* @Author: anchen
* @Date:   2015-09-25 16:18:34
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-25 16:30:04
*/

var arrDemo = new Array();

 arrDemo[0] = 10;
 arrDemo[1] = 50;
 arrDemo[2] = 51;
 arrDemo[3] = 100;
  arrDemo[4] = -100;

 console.log( arrDemo.sort());

  arrdem9=arrDemo.sort(function(a,b){return a>b?1:-1})
  console.log(arrdem9); 

  arrdem8=arrDemo.sort(function(a,b){return b>a?1:-1})
  console.log(arrdem8);



  var arr=[12,3,5,6,100];
     arr.sort(function(a,b){return a>=b?1:-1});
  console.log(arr);