let stack = function () {
    this.items = [];
    this.push = function (element) {
        return this.items.push(element);
    }
    this.pop = function () {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }
    this.peek = function () {
        return this.items[this.items.length - 1];
    }
    this.isEmpty = function () {
        return this.items.length === 0;
    }
    this.print = function () {
        let str = "";
        for (let i = 0; i < this.items.length; ++i) {
            str += this.items[i];
        }
        return str;
    }
}

let s = new stack();
//console.log(s.pop());
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
s.push(60);
//console.log(s.print());

function reverseString(str) {
    let stack = [];
    for (let i = 0; i < str.length; ++i) {
        stack.push(str[i]);
    }
    let result = "";
    while (stack.length > 0) {
        result += stack.pop();
    }
    return result;
}
//console.log(reverseString("Hello World"));

//Get Min value from the array 

function minVal(arr) {
    this.stack = [];
    this.minStack = [];
    this.init = function () {
        let min = arr[0];
        for (i = 0; i < arr.length; ++i) {
            this.stack.push[arr[i]];
            min = Math.min(min, arr[i]);
            this.minStack.push(min);
        }
    }
    this.getMin = function () {
        this.stack.pop();
        return this.minStack.pop();
    }
    this.init();
}
let arr = new minVal([10, 3, 12, 4, 14, 2]);
//console.log(arr.getMin());
//console.log(arr.getMin());

function maxVal(arr) {
    this.stack = [];
    this.maxStack = [];
    this.init = function () {
        let max = arr[0];
        for (let i = 0; i < arr.length; ++i) {
            this.stack.push(arr[i]);
            max = Math.max(max, arr[i]);
            this.maxStack.push(max);
        }
    }
    this.getMax = function () {
        this.stack.pop();
        return this.maxStack.pop();
    }
    this.init();
}
let maxArr = new maxVal([10, 3, 12, 4, 14, 2, 25]);
//console.log(maxArr.getMax());
//console.log(maxArr.getMax());

function queueUsingStack() {
    this.stack = [];
    this.temp = [];
    this.push = function (element) {
        return this.stack.push(element);
    }
    this.pop = function () {
        if (this.stack.length <= 0) {
            return "Underflow";
        } else {
            while (this.stack.length > 0) {
                this.temp.push(this.stack.pop());
            }
            let poppedElement = this.temp.pop();
            while (this.temp.length > 0) {
                this.stack.push(this.temp.pop());
            }
            return poppedElement;
        }
    }
    this.print = function () {
        let str = "";
        for (let i = 0; i < this.stack.length; ++i) {
            str += this.stack[i];
        }
        return str;
    }
}

let str = new queueUsingStack();
str.push(1);
str.push(2);
str.push(3);
console.log(str.pop());
str.push(4);
console.log(str.pop());
console.log(str.pop());
console.log(str.pop());