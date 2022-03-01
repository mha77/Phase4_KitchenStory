package com.simplilearn.Phase4.service;

import com.simplilearn.Phase4.entity.Product;
import com.simplilearn.Phase4.repository.ProductRepository;
import com.simplilearn.Phase4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> getProducts(){
        List<Product> products = new ArrayList<>();
        products = productRepository.findAll();

        return products;
    }

    public Product saveProducts(Product product){
        //List<Product> products = new ArrayList<>();
        Product p = productRepository.save(product);

        return p;
    }
}
