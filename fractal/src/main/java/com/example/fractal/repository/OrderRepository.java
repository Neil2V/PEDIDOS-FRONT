package com.example.fractal.repository;

import com.example.fractal.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Pedido, Integer> {
}
