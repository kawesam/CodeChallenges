class  Queue {
    constructor(){
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    //add items to the back of the queue
    enqueue(item){
        this.items[this.tailIndex] = item;
        this.tailIndex ++;
    }

    dequeue(){
        if(this.length){
            const item = this.items[this.headIndex];
            delete this.items[this.headIndex];
            this.headIndex ++;
            return item;
        }
        return "Empty";

    }

    peek(){
        if(this.length){
            return this.items[this.headIndex];

        }
        return undefined;
    }
    get length(){
        return this.tailIndex - this.headIndex;
    }
}

const q = new Queue();
q.enqueue("Sam");


console.log(q)

console.log(q.length);
console.log(q.peek());
console.log(q.dequeue());
console.log(q)
console.log(q.dequeue());
console.log(q)


