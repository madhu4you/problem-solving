function findSingleValueTrees(root) {
    let result = [0];
    if (!root) return 0;
    helper(root, result);
    return result[0];
}

function helper(node, result) {
    if (!node.left_ptr && !node.right_ptr) {
        result[0] += 1;
        return true;
    }

    let leftUnival = true;
    let rightUnival = true;
    let currentUnival = true;

    if (node.left_ptr) {
        leftUnival = helper(node.left_ptr, result);
        currentUnival = currentUnival && leftUnival && node.val === node.left_ptr.val
    }

    if (node.right_ptr) {
        rightUnival = helper(node.right_ptr, result);
        currentUnival = currentUnival && rightUnival && node.val === node.right_ptr.val
    }
    if (currentUnival) {
        result[0] += 1;
        return true;
    }
}


function findSingleValueTrees(root) {
    let result = [0];
    if (!root) return 0;
    helperTree(root, result);
    return result[0];
}

function helperTree(node, result) {
    let isLeft = true;
    let isRight = true;
    if (node.left_ptr)
        isLeft = helper(node.left_ptr, result);
    if (node.right_ptr)
        isRight = helper(node.right_ptr, result);

    if (!isLeft || !isRight) return false;
    if (node.left_ptr !== null && node.left_ptr.val !== node.val) return false;
    if (node.right_ptr !== null && node.right_ptr.val !== node.val) return false;
    result[0] += 1;
    return true;
}


function univalTree(root) {
    let result = [0];
    uinvalHelper(root);
    return result[0];

    function uinvalHelper(node) {
        if (!node) return true;
        let isLeft = uinvalHelper(node.left_ptr);
        let isRight = uinvalHelper(node.right_ptr);
        if (!isLeft || !isRight) return false;
        if (node.left_ptr !== null && node.val !== node.left_ptr.val) return false;
        if (node.right_ptr !== null && node.val !== node.right_ptr.val) return false;
        result[0]++;
        return true;
    }
}