class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedList {
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

let list = new linkedList();
list.addData(10);
list.addData(20);
let node1 = new Node(1);
let node2 = new Node(3);
let node3 = new Node(4);
let node4 = new Node(5);
list.add(node1);
list.add(node2);
list.add(node3);
list.add(node4);
console.log(list.size());
list.remove(3);
console.log(list.getLength());
console.log(list.getFirst());
console.log(list.getLast());