let objectEquals = (x, y) => {
    if(x === null || y === null || x === undefined || y === undefined) return x === y;
    if(x.constructor !== y.constructor) return false;
    if(x instanceof Function) return x === y;
    if(x instanceof RegExp) return x === y;
    if(x === y && x.valueOf() === y.valueOf()) return true;
    if(Array.isArray(x) && x.length !== y.length) return false;

    if(x instanceof Date) return false;

    if(! (x instanceof Object)) return false;
    if(! (y instanceof Object)) return false;

    let key = Object.keys(x);
    return Object.keys(y).every((ele) => {
        if(key.indexOf(ele) !== -1){
           return  key.every((val) => {
                return objectEquals(ele, val);
            });
        }
    });
    
}

console.log(objectEquals(null,null)); // True
console.log(objectEquals(null,undefined)); // False
console.log(objectEquals(/abc/, /abc/)); //False
console.log(objectEquals(/abc/, /123/)); // Flase
var r = /abc/;
console.log(objectEquals(r, r)); //True

console.log(objectEquals("hi","hi")); // True
console.log(objectEquals(5,5)); //True
console.log(objectEquals(5,10)); //False

console.log(objectEquals([],[])); //True
console.log(objectEquals([1,2],[1,2])); //True
console.log(objectEquals([1,2],[2,1])); // False
console.log(objectEquals([1,2],[1,2,3])); //False

console.log(objectEquals({},{})); //True
console.log(objectEquals({a:1,b:2},{a:1,b:2})); //True
console.log(objectEquals({a:1,b:2},{b:2,a:1})); //True
console.log(objectEquals({a:1,b:2},{a:1,b:3})); //False

console.log(objectEquals({1:{name:"mhc",age:28}, 2:{name:"arb",age:26}},{1:{name:"mhc",age:28}, 2:{name:"arb",age:26}})); //True
console.log(objectEquals({1:{name:"mhc",age:28}, 2:{name:"arb",age:26}},{1:{name:"mhc",age:28}, 2:{name:"arb",age:27}})); //False
