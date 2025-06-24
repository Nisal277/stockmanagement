package com.example.stockmanagement.service;

import com.example.stockmanagement.model.Product;
import com.example.stockmanagement.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService 
{

    @Autowired

    private ProductRepository repo;

    public List<Product> getAll()
    {
        return repo.findAll();
    }

    public Product getById(String id)
    {
        return repo.findById(id).orElse(null);
    }

    public Product save(Product p)
    {
        return repo.save(p);
    }

    public void delete(String id)
    {
        repo.deleteById(id);
    }
    
    
}
