let array = [{x:1, y:2},  {x:null, y:4}, {x:3, y:4}, {x:3, y:undefined}];

filter(array);
function filter(arr){
	for (let i = 0; i < arr.length; i++) {
		((typeof(arr[i].x) === "number") && (typeof(arr[i].y) === "number")) ? (true) : (delete arr[i]);
	}
	arr.sort((item, index) => item - index);
	return arr;
}
console.log(array);