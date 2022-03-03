package com.simplilearn.Phase4.repository;

import com.simplilearn.Phase4.entity.Cart;
import com.simplilearn.Phase4.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends CrudRepository<Cart, Integer> {


    //public User findByName(String name);
    //List<Product> findAll();
}