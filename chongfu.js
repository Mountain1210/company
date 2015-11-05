/* 
* @Author: anchen
* @Date:   2015-09-16 11:54:24
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-16 17:08:24
*/

var str="122223333";

console.log('aaa  bbbccc ddaa'.replace(/([\s\S]{1})(?:\1+)/g,'$1'));

console.log("aaaaabbbbbbbdaasdf1233334567890aaaa ".replace(/[\d]{3}/g,"a1b"));
console.log("1 aaaaa bbbbbbb daasdf1233334567890aaaa ".replace(/[\D]/g,"010"));
console.log("1 aaaaa bbbbbbb daasdf1233334567890aaaa ".replace(/[\D]{2,}/g,"020"));
console.log("1 aaaaa bbbbbbb daasdf1233334567890aabbbbbaa ".replace(/a{1,}/,"020").replace(/a{1,}/,"020"));


var re = /\w/;
str = "Certainly!He loves her!";  
console.log(re.test(str));

var tel='15800001111';

console.log(tel.replace(/1[78965][0-9]{9}/,"a"));


arra="aaa bbb ccc ddd ddddddddd eeeee ".split(/(\w)\1+/);
console.log(arra);

// split((\w)((?=\1\1\1)(\1))+);
arra="aaa工作1bbb工作2".replace(/(.)\1+/g,"* ");
console.log(arra);

arra="aaa bbb ccc ddd ddddddddd eeeee ".replace(/(\w)\1+/,"AAA");
console.log(arra);