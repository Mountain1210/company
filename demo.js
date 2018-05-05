var books=['Metamorphosis','Crime and punishment'];
var serverBooks=function (){
    var html='<b>'+books.join('</b><br><b>')+'</b>';
    books=[];
    console.log(html) ;
}
serverBooks();

console.log("Hello");
setTimeout(function(){
    console.log('world');
});
console.log('bye');
