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

    RemoveNode = (index) => {
        if(index < 0 || index > this.size)
            console.log("Enter a valid index");
        else{
            let currentNode = this.head;
            let prev = currentNode;
            let iterate = 0;

            if(index === 0)
                this.head = currentNode.next;
            else{
                while(iterate < index){
                    iterate++;
                    prev = currentNode;
                    currentNode = currentNode.next;
                }
                prev.next = currentNode.next;
            }
            this.size--;
        }
    }
}

let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.showLL();
list.RemoveNode(2);
list.showLL();