class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Queue {
    constructor() {
        this.data = [];
    }
    add = function (record) {
        this.data.unshift(record);
    };
    remove = function () {
        this.data.pop();
    };
    first = function () {
        return this.data[0];
    };
    last = function () {
        return this.data[this.data.length - 1];
    };
    size = function () {
        return this.data.length;
    };
    isEmpty = function () {
        return this.data.length === 0;
    };
}
let printLeftMostAtAllLevel = function (node) {
    let result = [];
    let q = new Queue();
    q.add(node);
    while (!q.isEmpty()) {
        let size = q.size();
        let print = false;
        while(size-- >0) {
            node = q.remove();
            if(!print) {
                result.push(node.value);
                print= true;
            }
            for( child in node.child) {
                q.add(c);
            }
        }
    }
}