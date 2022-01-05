class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedListClass {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addData(data) {
        let newNode = new Node(data);
        this.add(newNode);
    }

    add(node) {
        let currentNode = this.head;
        if (currentNode === null) {
            this.head = node
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    }
    addAt(node, index) {
        let currentNode = this.head;
        let currentIndex = 0;
        let previousNode;
        if (index < 0 || index > this.size()) {
            return "Data cannot add for the provided index";
        }
        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = node;
            node.next = currentNode;
        }
        this.length++;
    }
    removeAt(index) {
        let currentNode = this.head;
        let currentIndex = 0;
        let previousNode;
        if (this.head === null) {
            return "List is empty";
        }
        if (index < 0 || index > this.size()) {
            return "Data cannot remove for the provided index";
        }
        if (index === 0) {
            this.head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
            return currentNode.data;
        }
        this.length--;

        return -1;
    }
    remove(data) {
        let currentNode = this.head;
        let previousNode;
        if (this.head === null) {
            return "List is empty";
        }
        if (currentNode.data === data) {
            this.head = currentNode.next;
        } else {
            while (currentNode.data != data) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    getLength() {
        return this.length;
    }
    clear() {
        this.head = null;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }
    indexOf(data) {
        let index = -1;
        let currentNode = this.head;
        while (currentNode.next) {
            index++;
            if (currentNode.data === data) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
}

let listObj = new linkedListClass();
listObj.addData(10);
listObj.addData(20);
let node1 = new Node(1);
let node2 = new Node(3);
let node3 = new Node(4);
let node4 = new Node(5);
listObj.add(node1);
listObj.add(node2);
listObj.add(node3);
listObj.add(node4);
console.log(listObj.size());
listObj.remove(3);
console.log(listObj.getLength());
console.log(listObj.getFirst());
console.log(listObj.getLast());