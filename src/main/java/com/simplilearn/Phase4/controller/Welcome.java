package com.simplilearn.Phase4.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Welcome {

    @RequestMapping("/")
    public String welcome(Model model) {
        //model.addAttribute("user", new User());
        return "index";
    }

    @GetMapping("/userMain")
    public String userMain(Model model){
        return "UserMain";
    }

    @GetMapping("/userRegister")
    public String userRegister(Model model){
        return "UserRegister";
    }

    @GetMapping("/userLogin")
    public String userLogin(Model model){
        return "UserLogin";
    }

    @GetMapping("/userHome")
    public String userHome(Model model){
        return "UserHome";
    }

    @GetMapping("/adminMain")
    public String adminMain(Model model){
        return "AdminMain";
    }

    @GetMapping("/adminLogin")
    public String adminLogin(Model model){
        return "AdminLogin";
    }

    @GetMapping("/adminHome")
    public String adminHome(Model model){
        return "AdminHome";
    }
}
