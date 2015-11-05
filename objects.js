/* 
* @Author: anchen
* @Date:   2015-11-03 15:24:19
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-04 10:50:30
*/

var name = 'the window';
var object = {
  name: 'My object',
  getFunc: function (){
    console.log(this);
     var that = this;
     var name2="demodemo";
     return function(){
        console.log(that);
        console.log(this);
        console.log(name2);
        return that.name;
     }
  }
};
console.log(object.getFunc()());   //'My object'

var n=1.345;
console.log(isNaN(n));