/*var map = new Map();
map.set('a', 'apple');
map.set('b', 'banana');
map.set('c', 'chop');

for(let aa of map) {
	console.log(aa);
}
console.log(map);*/


/*
class Person {

	constructor(){
		this.name = 'name';
		this.age = 'age';
	}

	showName() {
		console.log(this.name);
	}

	showAge() {
		console.log(this.age);
	}
}

class Chinese extends Person {
	
}


let p = new Person('adfasf',11);
p.showName();
p.showAge();

let c = new Chinese();
c.showName();
c.showAge();

*/

/*
import mode1 from './modeA.js';
import mode2 from './modeB.js';


console.log(modeA.a);
console.log(modeB.a);*/

var p1 = new Promise(function(resolve, reject) {
	setTimeout(resolve, 3000, 'one');
});

var p2 = new Promise(function(resolve, reject) {
	setTimeout(resolve, 6000, 'two');
});

Promise.race([p1, p2]).then(function(value) {
	console.log(value);
});

console.log()

/*var exports = {};

(function (exports) {
	
	exports.a = 132;
})(exports);

console.log(exports.a);
*/