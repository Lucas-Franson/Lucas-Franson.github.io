
function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.add = function(value) {
    let newNode = new Node(value);
    if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

LinkedList.prototype.print = function() {
    let current = this.head;
    let str = 'LinkedList{';
    while (current !== null) {
        str += current.value;
        if (current.next !== null) {
            str += ',';
        }
        current = current.next;
    }
    str += '}';
    console.log(str);
}

LinkedList.prototype.remove = function(value) {
    if (this.head === null) {
        return;
    }
    if (this.head.value === value) {
        this.head = this.head.next;
        return;
    }
    let current = this.head;
    while (current.next !== null) {
        if (current.next.value === value) {
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
}


let linkedlist = new LinkedList();

linkedlist.add(1);

linkedlist.add(2);

linkedlist.add(3);

linkedlist.print(); //Expected Result: LinkedList{1,2,3};

linkedlist.remove(2);

linkedlist.print(); //Expected Result: LinkedList{1,3};