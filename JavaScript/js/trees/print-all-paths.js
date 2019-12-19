function printAllPaths(root){
    if(!root) return;
    let allPaths = [];
    printHelper(node, path) {
        path.push(node.val);
        if(!node.left_ptr && !node.right_ptr) {
            allPaths.push(path.slice(0));
        }
        if(node.left_ptr) printHelper(node.left_ptr);
        if(node.right_ptr) printHelper(node.right_ptr);
        path.pop();
    }
    printHelper(root, []);
    allPaths.forEach(function(path){
        console.log(path.join(" "));
    });
}