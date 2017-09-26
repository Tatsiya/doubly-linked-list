const Node = require('./node');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var newNode = new Node(data);

        if (this._head == null) {
            this._head = newNode;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
        }

        this._tail = newNode;
        this.length++;
        return this;
    }

    head() {
        if (this._head !== null) {
        return this._head.data;
    } else {
        return null;
    }

    }

    tail() {
        if (this._tail !== null) {
        return this._tail.data;
    } else {
        return null;
    }
    }

    at(index) {
        var i = 0;
        var current = this._head;
        while (current != null) {
            if (i == index) {
                return current.data;
            }

            current = current.next;
            i++;
        }
        return false;
    }

    insertAt(index, data) {
        var node = new Node(data);
        var i = 0;
        var previous = null;
        var current = this._head;
         while (current != null) {
             if (i == index) {
                 previous.next = node;
                 node.next = current;
            
                 this.length++
             }
             previous = current;
             current = current.next;
             i++;
         }
             return this;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var i = 0;
        var current = this._head;
        var previous = null;
        var temp = current.next;
        while (current != null) {
            if (i === index) {
                if (previous != null) {
                   previous.next = current.next;
                   temp.prev = current.prev;
                   if (current.next == null) {
                       this._tail = previous;
                       this._tail.next = null;
                   }
                } else {
                   this._head = this._head.next;
                   if (this._head == null) {
                       this._tail = null;
                   } else {
                       this._head.prev = null;
                   }
                }
               
                this.length--;
            }
            previous = current;
            current = current.next;
            i++;
       }
    
       return this;
    }


    reverse() {
        var previous = null;
        var current = this._head;
        var temp;
        while (current != null) {
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }

        temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        var current = this._head;
        var i = 0;
        while (current != null) {
            if ( current.data === data) {
                return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
