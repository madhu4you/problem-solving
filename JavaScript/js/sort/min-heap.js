/** 
 * Array Method
 * Left: i * 2
 * Right left + 1
 * Parent i / 2
 * Insert Time Complexity O(Logn)
 * Remove Time Complexity is O(Logn)
 */

function minHeap() {
    let heap = [null];
    this.insert = function (num) {
        heap.push(num);
        if (heap.length > 2) {
            let lastId = heap.length - 1;
            let parentLastId = Math.floor(lastId / 2);
            while (heap[lastId] < heap[parentLastId]) {
                if (lastId >= 1) {
                    [heap[lastId], heap[parentLastId]] = [heap[parentLastId], heap[lastId]];
                    if (parentLastId > 1) {
                        lastId = parentLastId;
                        parentLastId = Math.floor(lastId / 2);
                    }
                } else break;
            }
        }
    };
    this.remove = function () {
        let smallest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            let root = 1;
            let left = root * 2;
            let right = left + 1
            while (heap[root] >= heap[left] || heap[root] >= heap[right]) {
                if (heap[left] < heap[right]) {
                    [heap[root], heap[left]] = [heap[left], heap[left]];
                    root = left;
                } else {
                    [heap[root], heap[right]] = [heap[left], heap[right]];
                    root = right;
                }
                left = root * 2;
                right = root * 2 + 1;
                if (heap[left] === undefined || heap[right] === undefined) break;
            }
        } else if(heap.length === 2) {
            heap.splice(1, 1);
        }
        return smallest;
    }

    this.sort = function () {
        let result = [];
        while (heap.length > 1) {
            result.push(this.remove());
        }
        return result;
    }

    this.min = function () {
        return heap[1];
    }

    this.left = function (i) {
        return heap[i * 2];
    }

    this.right = function (i) {
        return heap[i * 2 + 1];
    }
}