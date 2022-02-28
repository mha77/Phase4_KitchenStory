package com.simplilearn.Phase4.controller;

import com.simplilearn.Phase4.entity.Product;
import com.simplilearn.Phase4.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Products {

    @Autowired
    ProductService ps;

    @RequestMapping(value = "/getProducts", method = RequestMethod.GET)
    public List<Product> getProducts(){

        List<Product> lp;
        lp = ps.getProducts();
        return lp;
    }

}
