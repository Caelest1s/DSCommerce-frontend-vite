export class OrderDTO {
    //attributes ** id? -> opcional **
    id?: number;
    items: OrderItemDTO[] = [];

    // method
    get total(): number {
        let sum = 0;

        this.items.forEach(item => {
            sum += item.subTotal;
        })

        return sum;
    }
}

export class OrderItemDTO {
    constructor(
        public productId: number,
        public quantity: number,
        public name: string,
        public price: number,
        public imgUrl: string
    ) { }

    get subTotal(): number {
        return this.price * this.quantity;
    }
}