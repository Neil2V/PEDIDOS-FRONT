export class Product {
    id?: number;
    name: String;
    category: String;
    price: number;
    status: String;

    constructor(name: String, category: String, price: number, status: String){
        this.name = name;
        this.category = category;
        this.price = price;
        this.status = status;
    }
}
