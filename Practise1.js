alert("hello ! Welcome to Banglore");
var globalFunction=function(param1){
  var localvar="this is a local var";
  var localFunction=function(){
    var Super="hello";
    alert(Super);
    alert(localvar);
    alert(param1);
    alert(globalvar);
    alert(foo);
  };
  localFunction();
};
globalFunction(2);
