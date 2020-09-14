//user defined class node 
class Node {
    constructor(element){
        this.element = element;
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    //adds the element at end of the list
    add(element){
        var node = new Node(element)   //creates a new node
        var current;
        if(this.head == null)   //if list is empty add the element and make it head
        this.head = node;
        else{
            current = this.head;
        while(current.next){    //iterate to end of the list
            current = current.next;
        }
        current.next = node;  //add node
    }
    this.size++;
}

    //insert eleemnt at the position insex of list
    insertAt(element, index){
        if(index>0 && index>this.size)
        return false;
        else{
            var node = new Node(element);   //create a node
            var curr, prev;
            curr= this.head;
            //add elemnt to first index
            if(index == 0){
                node.next = this.head;
                this.head = node;
            }else {
                curr = this.head;
                var it=0;
                //iteraet over list to find position to insert
                while(it < index){
                    it++
                    prev = curr;
                    curr = curr.next;
                }
                //addding an eleemnt
                node.next=curr;
                prev.next=node;
            }
            this.size++;
        }
    }
    //remoevs an elemnt from the specifies location
    //It removes and returns an element from the list from the specified index
    removeFrom(index){
        if(index > 0 && index > this.size)
        return -1;
        else{
            var curr, prev, it=0;
            curr=this.head;
            prev=curr;

            //deleting first elemnt
            if(index ===0){
                this.head = curr.next;
            }else{
                // iterate over the list to the 
            // position to removce an element
            while(it < index){
                it++; 
                prev = curr; 
                curr = curr.next; 
            }
            //remove the element
            prev.next = curr.next;
            }
            this.size--;
            ////return the remove leemnt
            return curr.element;
        }
    }

    //removes elemnt from list returns removed element or if not found it retiurns-1
    removeElement(element){
        var current = this.head; 
    var prev = null; 
  
    // iterate over the list 
    while (current != null) { 
        // comparing element with current 
        // element if found then remove the 
        // and return true 
        if (current.element === element) { 
            if (prev == null) { 
                this.head = current.next; 
            } else { 
                prev.next = current.next; 
            } 
            this.size--; 
            return current.element; 
        } 
        prev = current; 
        current = current.next; 
    } 
    return -1; 
    }

}

var ll = new LinkedList();

ll.add(10);
ll.add(20); 
ll.add(30); 
ll.add(40); 
ll.add(50); 

console.log("is element removed ?" + ll.removeElement(50)); 

ll.insertAt(60, 2); 

console.log(ll.removeFrom(3)); 