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
}

class CircularLinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    LastNode = () => {
        let index = this.size - 1;
        if(index >= 0){
            let currentNode = this.head;
            for(let i = 0; i < index && currentNode != null; i++){
                currentNode = currentNode.next;
            }
            return currentNode;
        }
        return undefined;
    }

    add = (value) => {
        let node = new Node(value);
        let currentNode;

        if(this.head == null)
            this.head = node;
        else{
            currentNode = this.LastNode();
            currentNode.next = node;
        }
        node.next = this.head;
        this.size++;
    }

    showLL = () => {
        let currentNode = this.head;
        let temp = 0;
        while(temp < this.size){
            process.stdout.write(currentNode.value+"  ");
            currentNode = currentNode.next;
            temp++;
        }
        console.log();
    }
}

CheckCircular = (list) => {
    let index = list.size - 1;
        if(index >= 0){
            let currentNode = list.head;
            for(let i = 0; i < index && currentNode != null; i++){
                currentNode = currentNode.next;
            }
            if(currentNode.next == list.head)
                console.log("It is a Circular Linked list");
            else
                console.log("It is not a Circular Linked list");
        }
        else
            console.log("Empty Linked list");
}

let list = new CircularLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.showLL();

CheckCircular(list);

let list2 = new LinkedList();
list2.add(10);
list2.add(20);
list2.add(30);
list2.add(40);
list2.add(50);
list2.showLL();

CheckCircular(list2);