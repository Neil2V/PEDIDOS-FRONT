package com.example.fractal.service;

import com.example.fractal.entity.Pedido;
import com.example.fractal.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    public void save(Pedido order){
        orderRepository.save(order);
    }
}
