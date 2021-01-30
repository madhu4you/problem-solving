class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.last = null;
    }
    getSize() {
        return this.length;
    }
    getLast() {
        return this.last;
    }
    isEmpty() {
        return this.head === null;
    }
    add(data) {
        let node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            this.last.next = node;
        }
        this.last = node;
        this.length++;
    }
    addIndex(data, index) {
        let node = new Node(data);
        let currentNode = this.head;
        let currentIndex = 0;
        let previousNode;
        if (index < 0 || index > this.getSize()) {
            return "Unable to add the data for provide index";
        }
        if (index === this.length || index === 0) {
            this.add(data);
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = node;
            node.next = currentNode;
            this.length++;
        }
        return true;
    }
    getIndex(data) {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode.next) {
            currentIndex++;
            if (currentNode.data === data) {
                return currentIndex;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
    remove(data) {
        let currentNode = this.head;
        let previousNode;
        if (this.isEmpty()) {
            return "List is empty";
        }
        if (currentNode) {
            if (currentNode.data == data) {
                this.head = currentNode.next;
                this.length--;
            } else {
                while (currentNode && currentNode.data != data) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                if (currentNode) {
                    previousNode.next = currentNode.next;
                    if (currentNode === this.last) {
                        this.last = previousNode;
                    }

                    this.length--;
                }
            }
        }
        return;
    }
    removeIndex(index) {
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        if (index < 0 || index > this.getSize()) {
            return "Unable to delete the data for provide index";
        }
        if (this.isEmpty()) {
            return "List is empty";
        }
        if (currentNode) {
            if (index == 0) {
                this.head = currentNode.next;
                this.length--;
            } else {
                while (currentIndex < index) {
                    currentIndex++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = currentNode.next;
                if (currentNode === this.last) {
                    this.last = previousNode;
                }

                this.length--;
            }
        }
        return;

    }
    clear() {
        return this.head = null;
    }
    print() {
        let list = []
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            list.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return list;
    }
}

let list = new linkedList();
list.add(1);
list.add(2);
console.log(list.addIndex(4, 2));
console.log(list.addIndex(10, 1));
list.add(5);
list.remove(5);
console.log(list.getLast());
console.log(list.getSize());
console.log(list.print());
list.remove(4);
console.log(list.getLast());
console.log(list.getSize());
console.log(list.print());