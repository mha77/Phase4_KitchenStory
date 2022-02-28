package com.simplilearn.Phase4.repository;

import com.simplilearn.Phase4.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {


        //public User findByName(String name);
        List<Product> findAll();
}

