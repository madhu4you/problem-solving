let list = function () {
    let head = null;
    let length = 0;
    let Node = function (element) {
        this.data = element;
        this.next = null;
    }

    let add = function (element) {
        let node = new node(element);
        if (head === null) {
            head = node;
        } else {
            let currentNode = head;
            while (currentNode.next) {
                currentNode.next = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    }
    let remove = function (element) {
        let currentNode = head;
        let previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element != element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    }
    let indexOf = function (element) {
        let currentNode = head;
        let index = -1;
        while(currentNode) {
            index ++;
            if(currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
}