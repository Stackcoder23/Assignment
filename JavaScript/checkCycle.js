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

    CheckCycle = () => {
        let set = new Set();
        while(this.head){
            if(set.has(this.head)){
                console.log("Linked list has cycle");
                return;
            }
            set.add(this.head);
            this.head = this.head.next;
        }
        console.log("Linked list does not have cycle");
    }
}

let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

list.showLL();

// list.head.next.next.next = list.head;
list.CheckCycle();