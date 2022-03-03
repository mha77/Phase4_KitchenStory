package com.simplilearn.Phase4.service;

import com.simplilearn.Phase4.entity.Cart;
import com.simplilearn.Phase4.entity.Product;
import com.simplilearn.Phase4.repository.CartRepository;
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

    @Autowired
    CartRepository cr;

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

    public Cart saveCart(Cart cart){
        //System.out.println("Cart: " + cart.getCompany());
        Cart c = cr.save(cart);
        //int cId = c.getCart_id();
        //cart.
        return c;
    }

    public void delProduct(Product product){
        int id = product.getProduct_id();
        productRepository.deleteById(id);
    }
}
