

var total = 0; 

var args = process.argv.slice(2);
//console.log(args);
//total  = Number(args[0]) +Number( args[1]);
var ar;
for (ar in args){

	total += Number(args[ar]);
}
console.log(total);

