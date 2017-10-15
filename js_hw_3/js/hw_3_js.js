
function SaveArgs(){
    var arg = [];
    return function() {
    if (arguments.length==0)
            {
                return arg;
            }
            else{
                for (var i=0; i< arguments.length; i++){
                    arg.push(arguments[i]);
                }
            }
        }
}
var manyArg = SaveArgs ();
manyArg (1,2);
manyArg ("Hello");
manyArg ({a: 1}, "Some string");
alert (manyArg ());


