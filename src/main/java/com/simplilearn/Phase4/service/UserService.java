package com.simplilearn.Phase4.service;

import com.simplilearn.Phase4.entity.User;
import com.simplilearn.Phase4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public boolean authenticateUser(String email, String pw) {
        //List<User> users = new ArrayList<>();
        List<User> users = new ArrayList<>();
        users = userRepository.findAll();

        for (User user : users) {
            if (user.getEmail().equals(email) && user.getPassword().equals(pw)) {
                return true;
            }
        }
        return false;

    }

    public boolean registerUser(String fname, String lname, String email, String password){

        User user = new User();
        user.setFname(fname);
        user.setLname(lname);
        user.setEmail(email);
        user.setPassword(password);

        User ret = userRepository.save(user);

        if(true){
            return true;
        }else{
            return false;
        }

    }

}
