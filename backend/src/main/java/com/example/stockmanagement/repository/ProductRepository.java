package com.example.stockmanagement.repository;

import com.example.stockmanagement.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {}
