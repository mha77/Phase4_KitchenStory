package com.simplilearn.Phase4.service;

import com.simplilearn.Phase4.entity.Cart;
import com.simplilearn.Phase4.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    CartRepository cr;

    public Cart saveCart(Cart cart){
        Cart c = cr.save(cart);
        return c;
    }

    public void delCart(){
        cr.deleteAll();
    }

    public List<Cart> getCart(){
        List<Cart> cl = cr.findAll();
        return cl;
    }
}
