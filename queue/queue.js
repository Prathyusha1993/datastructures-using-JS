class Queue{
    constructor(){
        this.items=[];
    }
    //adds elemenyts to queue
    enqueue(element){
        this.items.push(element)
    }
    //removes element from front 
    dequeue(){
        if(this.items.length ==0) return "underflow"
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length == 0;
    }
    front(){
        if(this.items.length == 0 ) return undefined
        return this.items[0];
    }
    printQueue(){
        var str='';
        for(var i=0; i<this.items.length; i++){
            str += this.items[i] + ' '
    }
    return str;
    }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);

console.log(queue.front());

//removes first element
console.log(queue.dequeue());

queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.dequeue());

queue.enqueue(50);
queue.enqueue(60);
console.log(queue.dequeue());
console.log(queue.printQueue())

