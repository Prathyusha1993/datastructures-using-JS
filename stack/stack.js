class Stack {
    constructor(){
        this.items = []
        this.count = 0
    }
    //Add elements to top of the stack
    push(element){
        this.items[this.count] = element;
        console.log(`${element} added at ${this.count}`)
        this.count += 1;
        return this.count-1
    }
    //return and remove the top element in the stack
    //return undefined or underflow if stack is empty
    pop(){
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count-1]
        this.count -= 1
        console.log(`${deleteItem} removed`);
        return deleteItem
    }
    //peek checks th etop element in stack but dont delete anything
    peek(){
        console.log(`top element is ${this.items[this.count-1]}`)
        return this.items[this.count-1]
    }
    isEmpty(){
        console.log(this.count == 0 ? 'stack is empty' : 'stack is not empty')
        return this.count ==0 
    }
    size(){
        console.log(`${this.count} elements in the stack`)
        return this.count
    }
    printStack(){
        let str=''
        for(var i=0; i<this.count; i++){
            str += this.items[i] + ' '
        }
        return str
    }
    //claer stack
    clear(){
        this.item = []
        this.count =0
        console.log('stack cleared')
        return this.items
    }
}

const stack = new Stack()

stack.isEmpty();

stack.push(100);
stack.push(200);

stack.peek();

stack.push(300);

console.log(stack.printStack())

stack.pop();
stack.pop();

stack.size()

stack.isEmpty();

stack.clear();
