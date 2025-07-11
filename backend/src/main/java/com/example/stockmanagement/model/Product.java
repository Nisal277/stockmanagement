package com.example.stockmanagement.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "products")

public class Product 
{
    @Id

    private String id;

    private String name;
    private String description;
    private int quantity;
    private double price;
    
}
