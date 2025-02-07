class cart{
    constructor(){
        this.cart=[];
        this.message="Welcome to Dmart";
    }

    addItem(name,price){
        this.cart.push((name,price));
    }
    
    removeItem(name){
        this.cart=this.cart.filter((Item) => Item.name !== name);
    }

    calculateToatal(){
        let total = 0;
        for (let item of this.cart) {
            total += item.price;
        }
        return total;
    }
}

export {cart};
