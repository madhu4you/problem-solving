function printAllPaths(root) {
    if (!root) return;
    let allPaths = [];
    function printHelper(node, path) {
        path.push(node.val);
        if (!node.left_ptr && !node.right_ptr) {
            allPaths.push(path.slice(0));
        }
        if (node.left_ptr) printHelper(node.left_ptr);
        if (node.right_ptr) printHelper(node.right_ptr);
        path.pop();
    }
    printHelper(root, []);
    allPaths.forEach(function (path) {
        console.log(path.join(" "));
    });
}


function printBSTPath(root) {
    let allPath = [];

    function pathHelper(node, path) {
        if (!node) return;
        path.push(node.val);
        if (!node.right_ptr && !node.left_ptr) allPath.push(path.slice(0));
        pathHelper(node.left_ptr, path);
        pathHelper(node.right_ptr, path);
        path.pop();
    }
    pathHelper(root, []);
    allPath.forEach(function (path) {
        console.log(path.join(" "));
    });
}