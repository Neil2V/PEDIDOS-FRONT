package com.example.fractal.service;

import com.example.fractal.entity.Product;
import com.example.fractal.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public void save(Product product){
        productRepository.save(product);
    }
}
