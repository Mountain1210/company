/* 
* @Author: anchen
* @Date:   2015-09-28 09:05:35
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-28 11:11:35
* 调用父类方法
*/


Function.prototype.method=function(name,func){
    if(!this.prototype[name]){
        this.prototype[name]=func;
    }
}

//superior是利用反射机制获取js父类的方法
Object.method('superior',function(name){
    var that=this;
    var method=that[name];
    return function(){
        return method.apply(that,arguments);
    }
});

var mammal=function(spec){
    var that={};
    that.get_name=function(){
        return spec.name;
    }
    that.says=function(){
        return spec.saying || '';
    }
    return that;
}


var cat=function(spec){
    spec.saying=spec.saying||'meow';
    var that=mammal(spec);
    that.purr=function(){
        var i, s='';
        for(i=0; i<n; i+=1){
            if(s){
                s+='-';
            }
            s+='r';
        }
        return s;
    }
    that.get_name=function(){
        // console.log(that.says());
        return '('+that.says()+')  ===  '+spec.name+' === ('+that.says()+')';
    }
    return that;
}

// var mycat=cat({name:'Henrietta'});

var coolcat=function(spec){
    console.log(spec);
    var that=cat(spec);
    var super_get_name=that.superior('get_name'); 
    that.get_name=function(n){
        return 'like'+super_get_name()+'baby';
    }
    return that;
}
var myCoolCat=coolcat({name:'bix',saying:function(){return 'aaa'}});
// var myCoolCat=coolcat({name:'bix',saying:(function(){return 'aaa'})()});//这个返回一个aaa字符串
var name=myCoolCat.get_name();
var mycc=new coolcat({name:'bixc'});
console.dir(mycc)
console.log(mycc.get_name())
// console.log(name);

