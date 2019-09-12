/*
* Conditionals, Functions, Scope and Loops.
 */

let storeA = 3.1;
let storeB = 2.2;

function priceCheck(A,B) {
	let aResult = A < B;
	let bResult = A > B;
	if(aResult === true) {
		answer = "Store A is lower";
	} else if (bResult === true) {
		answer = "Store B is lower";
	} else {
		answer = "Both are the same";
	}
	return answer;
}

console.log(priceCheck(3,3));
retu = ["wer", "ret", "Rerun"];
retu.unshift("test1");
for (let counter=0; counter<retu.length; counter++){
	console.log(retu[counter]);
}
let x=0;
while (x<10) {
	console.log('ran');
	x++;
}