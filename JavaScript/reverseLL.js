class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add = (value) => {
        let node = new Node(value);
        let currentNode;

        if(this.head == null)
            this.head = node;
        else{
            currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.size++;
    }

    showLL = () => {
        let currentNode = this.head;
        while(currentNode){
            process.stdout.write(currentNode.value+"  ");
            currentNode = currentNode.next;
        }
        console.log();
    }

    reverse = () => {
        let temp = null;
        let prev = null;
        let currentNode = this.head;
        while(currentNode){
            temp = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = temp;
        }
        this.head = prev;
    }
}

let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.showLL();
list.reverse();
list.showLL();