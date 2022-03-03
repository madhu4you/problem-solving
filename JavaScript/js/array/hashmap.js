/**
 * Design Hash map
 */
var MyHashMap = function () {
    this.map = new Array(1000);
    this.hashFn = function(key) {
        return key % 1000;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    let idx = this.hashFn(key);
    if(!this.map[idx]) {
        this.map[idx] = []; 
    }
    return this.map[idx].push({key, value});
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    let idx = this.hashFn(key);
    if(!this.map[idx]) {
        return -1;
    }
    let keyVal = this.map[idx];
    let val = -1;
    for(let i = 0; i < keyVal.length; i++) {
        if(keyVal[i] && keyVal[i]['key'] === key) {
            val = keyVal[i]['value'];
        }
    }
    return val;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    let idx = this.hashFn(key);
    if(!this.map[idx]) {
        return null;
    }
    let keyVal = this.map[idx];
    for(let i = keyVal.length - 1; i <= 0; i--) {
        if(keyVal[i] && keyVal[i]["key"] === key) {
            delete keyVal[i];
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 */
var obj = new MyHashMap()
obj.put(key, value)
var param_2 = obj.get(key)
obj.remove(key)
