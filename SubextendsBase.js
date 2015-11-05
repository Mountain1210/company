/* 
* @Author: anchen
* @Date:   2015-09-28 08:51:30
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-28 08:51:39
*/

function BaseClass() {
    //BaseClass constructor code goes here 
}

BaseClass.prototype.getName = function() {
    return "BaseClass";
}

function SubClass() {
    //SubClass constructor code goes here 
}

//Inherit the methods of BaseClass
SubClass.prototype = new BaseClass();

//Override the parent's getName method
SubClass.prototype.getName = function() {
    return "SubClass";
}

//Alerts "SubClass"
console.log(new SubClass().getName());