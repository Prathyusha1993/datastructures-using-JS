class Array{
    constructor(){
        this.length=0
        this.data=[]
    }
    push(element){
        this.data[this.length] = element
        this.length += 1
        return this.data
    }
    pop(){
        if(this.length == 0) return undefined
        let deleteItem = this.data[this.length-1]
        this.length  -= 1
        return deleteItem
    }
    getElementAtIndex(index){
        return this.data[index];
    }
    insertAt(item, index){
        for(let i=this.length; i>= index; i--){
            this.data[i] = this.data[i-1];
        }
        this.data[index] = item;
        this.length++;
        return this.data;
    }
    deleteAt(index){
        for(let i=index; i<this.length-1; i++){
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
        return this.data;
    }
}

const array = new Array()

array.push(2);
array.push(4);
array.push(6);
array.push(8);

console.log(array.pop())
console.log(array.getElementAtIndex(2));
console.log(array.getElementAtIndex(5));
console.log(array.pop())

console.log(array.insertAt(10, 4));

console.log(array.deleteAt(1));


