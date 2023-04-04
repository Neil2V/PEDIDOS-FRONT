package com.example.fractal.service;

import com.example.fractal.entity.Cliente;
import com.example.fractal.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    public void save(Cliente cliente){
        clienteRepository.save(cliente);
    }

}
