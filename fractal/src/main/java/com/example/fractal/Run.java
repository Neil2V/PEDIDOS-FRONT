package com.example.fractal;

import com.example.fractal.entity.Cliente;
import com.example.fractal.entity.Pedido;
import com.example.fractal.entity.Product;
import com.example.fractal.enums.StatusOrder;
import com.example.fractal.enums.StatusProduct;
import com.example.fractal.service.ClienteService;
import com.example.fractal.service.OrderService;
import com.example.fractal.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Component
public class Run implements CommandLineRunner {

    @Autowired
    ClienteService consumerService;
    @Autowired
    OrderService orderService;
    @Autowired
    ProductService productService;

    @Override
    public void run(String... args) throws Exception {



        Cliente cliente1 = new Cliente("Joe Smith");


        Product chocolate = new Product("Chocolate", "Candy", new BigDecimal("10"),StatusProduct.Active);
        Product chip_cookie = new Product("Chocolate chip cookie", "Cookies", new BigDecimal("5"),StatusProduct.Inactive);
        Product chocolate_cake = new Product("Chocolate cake", "Cakes", new BigDecimal("25"),StatusProduct.Active);



        Pedido pedido1 = new Pedido(StatusOrder.Pending, "3/04/2023", new BigDecimal("127.23"));
        Set<Pedido> pedidos_cliente1 = new HashSet<>();
        pedidos_cliente1.add(pedido1);

        pedido1.setCliente(cliente1);
        cliente1.setPedidos(pedidos_cliente1);

        Set<Product> products_pedido1 = new HashSet<>();
        products_pedido1.add(chocolate);
        products_pedido1.add(chip_cookie);

        pedido1.setProducts(products_pedido1);

        productService.save(chocolate);
        productService.save(chip_cookie);
        productService.save(chocolate_cake);

        consumerService.save(cliente1);

        orderService.save(pedido1);
    }
}

