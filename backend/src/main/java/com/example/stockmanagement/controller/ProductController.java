package com.example.stockmanagement.controller;

import com.example.stockmanagement.model.Product;
import com.example.stockmanagement.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/products")

public class ProductController 
{

    @Autowired
    private ProductService service;

    @GetMapping
    public List<Product> getAll()
    {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable String id)
    {
        return service.getById(id);
    }

    @PostMapping
    public Product create(@RequestBody Product p)
    {
        return service.save(p);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable String id , @RequestBody Product p)
    {
        p.setId(id);
        return service.save(p);
    }

     @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }

    
}
