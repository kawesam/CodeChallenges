// Implement a bounded queue with a maximum capacity. The queue should not allow any more items once the capacity has been reached

// queue = Queue ( size =3)
// queue. enqueue(1)
// queue. enqueue(2)
// queue. enqueue(3)

// queue.enqueue(4) ->throws error(queue is full)


class  Queue {
    constructor(c){
        this.front = this.rear = 0;
        this.capacity = c;

        this.items = new Array(this.capacity);

    }

    //add items to the back of the queue
    enqueue(item){
        if(this.capacity  === this.rear){
            console.log("Queue is full");
            return;
        }else{
            this.items[this.rear] = item;
            this.rear ++;
        }
        return;

    }

    dequeue(){
        if(this.front === this.rear){
            console.log("Queue is Empty");
            return;
        }else{
            for(let i = 0; i< this.rear - 1; i++){
                this.items[i] = this.items[i + 1];
            }
            //store 0 ar rear indicating no element
            if(this.rear < this.capacity)
                this.items[this.rear] = 0;
            this.rear--;

        }

    }

    peek(){
        if(this.length){
            return this.items[this.front];

        }
        return undefined;
    }
    get length(){
        return this.rear - this.front;
    }

    //print queue elements
    queDisplay(){
        let i;
        if(this.front === this.rear){
            console.log("Queue is Empty");
            return;
        }
            //traverse front to the rear
        for(i = this.front; i< this.rear;i++){
            console.log(this.items[i]);
        }
        return;

    }
}

const q = new Queue(4);
q.queDisplay();

console.log("#######")

q.enqueue(20);
q.enqueue(25);
q.enqueue(30);
q.queDisplay();
q.dequeue();
q.queDisplay()
q.dequeue();
q.dequeue();
q.queDisplay();
q.enqueue(21);
q.enqueue(22);
q.enqueue(23);
q.enqueue(24);
q.enqueue(25);
q.queDisplay();

q.enqueue(24);
