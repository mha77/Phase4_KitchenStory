package com.simplilearn.Phase4.controller;

import com.simplilearn.Phase4.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Cart {

    @Autowired
    CartService cs;

    @RequestMapping(value = "/addToCart", method = RequestMethod.POST, consumes = "application/json")
    public void addToCart(@RequestBody com.simplilearn.Phase4.entity.Cart cart){
        cs.saveCart(cart);
    }

    @RequestMapping(value = "/delCart", method = RequestMethod.GET)
    public void delCart(){
        cs.delCart();
    }
}
