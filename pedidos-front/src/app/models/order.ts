import { Cliente } from "./cliente";
import { Product } from "./product";

export class Order {
    id?: number;
    status: String;
    fecha: String;
    total: number;
    cliente: Cliente;
    products: Product[];
    constructor(status: String, fecha: String, total: number, cliente: Cliente, products: Product[]){
        this.status = status;
        this.fecha = fecha;
        this.total = total;
        this.cliente = cliente;
        this.products = products
    }


}
