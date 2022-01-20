class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value);
        this.size = 1;
    }


    add(data) {
        this.size = this.size + 1;
        const searchTree = (node) => {
            if (node === null){
                return new Node(data);
            }
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                } else {
                    return searchTree(node.left);
                }
            }
            if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data);
                } else {
                    return searchTree(node.right)
                }
            } else {
                this.size = this.size - 1;
                return null
            }
        };
        searchTree(this.root);
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right
        }
        return current.data;
    }

    getSize() {
        return this.size;
    }

    present(data) {
        let current = this.root;

        while (current) {
            if (current.data === data) {
                return true;
            }
            if (current.data > data) {
                current = current.left
            } else {
                current = current.right
            }

        }
        return false;
    }

    remove(data) {
        function removeNode(node, data) {
            //empty tree
            if (node === null) {
                return null;
            }

            if (data === node.data) {
                //has no children
                if (node.left === null && node.right === null) {
                    return null;
                }
                //has one child
                if (node.left === null) {
                    return node.right
                }
                //has one child
                if (node.right === null) {
                    return node.left
                }
                // has two children

                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }

        return removeNode(this.root, data);
    }

    dfsPreOrder(){
        const result = [];

        const traverse = node => {
            result.push(node.data);

            if (node.left) {

                traverse(node.left);
            }
            if (node.right) {

                traverse(node.right);
            }
        }
        traverse(this.root)
        return result;
    }

    // left, root, right
    dfsInOrder(){
        const result = [];

        const traverse = node => {
            if (node.left) {
                traverse(node.left);
            }
            result.push(node.data);
            if (node.right) {

                traverse(node.right);
            }
        };
        traverse(this.root)
        return result;
    }

    // left, right, root
    dfsPostOrder(){
        const result = [];

        const traverse = node => {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {

                traverse(node.right);
            }
            result.push(node.data);
        };
        traverse(this.root)
        return result;
    }
}

const bst = new BinarySearchTree(10);

console.log(bst.getSize());
bst.add(7);
bst.add(2);
console.log('3', bst.getSize());
bst.add(2);
console.log('3', bst.getSize());
// bst.add(4);
// bst.add(5);
bst.add(6);
// bst.add(7);
// bst.add(8);
bst.add(9);

bst.add(13)
//
// bst.remove(10);
console.log(bst.findMin());
bst.add(1);
console.log('min', bst.findMin());
console.log('size: 6 ->', bst.getSize());
console.log(bst.present(7));
console.log('bst before', bst);
bst.remove(7);
console.log(bst.present(7))




console.log('bst after', bst);
