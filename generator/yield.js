const path = '/home/aristyo/tugasPull/tryout01';
const fs = require('fs');
function * readDir(){
    fs.readdir(path, function(err, items) {
   for (var i=0; i<items.length; i++) {
       var file = items[i];
       yield file;
       console.log("List: " + file);
   }
    });
}
var foo = readDir();
console.log(foo.next().value);
