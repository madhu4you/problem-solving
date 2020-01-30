/** 
 * Array Method
 * Left: i * 2
 * Right left + 1
 * Parent i / 2
 * Insert Time Complexity O(Logn) 
 * Remove Time Complexity is O(Logn)
 */

function maxHeap() {
    let heap = [null];

    this.max = function () {
        return heap[1];
    }
    this.left = function (i) {
        return heap[i * 2];
    }
    this.right = function (i) {
        return heap[i * 2 + 1];
    }
    this.insert = function (num) {
        heap.push(num);
        if (heap.length > 2) {
            let lastIndex = heap.length - 1;
            let = Math.floor(lastIndex / 2);
            while (heap[lastIndex] > heap[parentIndex]) {
                if (lastIndex >= 1) {
                    [heap[parentIndex], heap[lastIndex]] = [heap[lastIndex], heap[parentIndex]];
                    if (parentIndex > 1) {
                        lastIndex = parentIndex;
                        parentIndex = Math.floor(lastIndex / 2);
                    }
                } else break;
            }
        }
    }
    this.remove = function () {
        let largest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            let root = 1;
            let left = root * 2;
            let right = left + 1;
            while (heap[root] <= heap[left] || heap[root] <= heap[right]) {
                if (heap[root] < heap[left]) {
                    [heap[root], heap[left]] = [heap[left], heap[root]];
                    root = left;
                }
                if (heap[root] < heap[right]) {
                    [heap[root], heap[right]] = [heap[right], heap[root]];
                    root = right;
                }
                left = root * 2
                right = left + 1
                if (heap[left] === undefined || heap[right] === undefined) break;
            }
        } else if (heap.length === 2) {
            heap.splice(1, 1);
        }
        return largest;
    }

    this.sort = function () {
        let result = [];
        while (heap.length > 1) {
            result.push(this.remove());
        }
        return result;
    }
}