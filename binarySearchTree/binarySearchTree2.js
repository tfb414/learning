class Node {
    constructor(node, left = null, right = null) {
        this.data = node;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree2 {
    constructor(data) {
        this.root = new Node(data);
        this.bst2Size = 1;
    }

    size() {
        return this.bst2Size;
    }

    add(data){
        const searchTree = (node) => {
            if(data < node.data) {
                if (node.left === null) {
                    this.bst2Size = this.bst2Size + 1;
                    node.left = new Node(data);
                    return
                }
                return searchTree(node.left);
            }
            if(data > node.data) {
                if (node.right === null) {
                    this.bst2Size = this.bst2Size + 1;
                    node.right = new Node(data)
                    return
                }
                return searchTree(node.right)
            }
            if (data === node.data) {
                return null;
            }
        };
        return searchTree(this.root)
    }

    present(data){
        let currentNode = this.root;
        while (currentNode) {
           if (data < currentNode.data){
               currentNode = currentNode.left;
           }
           else if (data > currentNode.data) {
               currentNode = currentNode.right;
           } else {
               return true
           }
       }
       return false;
    }

    findMax() {
        let currentNode = this.root;
        while(currentNode.right !== null) {
            currentNode = currentNode.right;

        }
        return currentNode.data;
    }

    remove(data){
        const removeNode = (node, data) => {
            // tree is null
           if (node.data === null) {
               return null;
           }

           if (data < node.data) {
               node.left = removeNode(node.left, data);
               return node;
           }
           if (data > node.data) {
               node.right = removeNode(node.right, data);
               return node;
           }

           if (node.data === data) {
               // no children
               if (node.left === null && node.right === null) {
                   return null
               }
               // one child
               if (node.left === null) {
                    return node.right;
               }

               if (node.right === null) {
                   return node.left;
               }

               // two children
               let tempNode = node.right;
               while(tempNode.left !== null) {
                   tempNode = tempNode.left
               }

               node.data = tempNode.data;
               node.right = removeNode(node.right, tempNode.data);
               return node;
           }

        };
        this.root = removeNode(this.root, data);
    }

    // pre order
    // root, left, right

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

const bst = new BinarySearchTree2(30);
bst.add(50);

console.log(bst);
bst.remove(50);
console.log(bst);


//bst.add(42);
//bst.add(10);
//console.log(bst.present(42));
//console.log(bst);
//console.log(bst.findMax());
//
//
//bst.add(51);
//
//console.log(bst.findMax());

