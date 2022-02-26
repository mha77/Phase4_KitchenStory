package com.simplilearn.Phase4.controller;

import com.simplilearn.Phase4.entity.User;
import com.simplilearn.Phase4.repository.UserRepository;
import com.simplilearn.Phase4.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;

@Controller
public class Welcome {

    @Autowired
    UserService us;

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

    @ResponseBody
    @PostMapping("/userHome")
    public String userHome(@ModelAttribute("user") User user, Model model)
    {
        String email = user.getEmail();
        String pw = user.getPassword();

        boolean auth = us.authenticateUser(email, pw);

        ModelAndView mav = new ModelAndView();
        mav.setViewName("UserHome");
        System.out.println("Auth: " + auth);
        //return "success";


        if(auth == true) {
            return "success";
        }else {
            return "error";
        }
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
    public String adminLogin( Model model )
    {
        return "AdminLogin";
    }

    @ResponseBody
    @PostMapping("/adminHome")
    public String adminHome(@ModelAttribute("user") User user, Model model){

        String email = user.getEmail();
        String pw = user.getPassword();

        boolean auth = us.authenticateUser(email, pw);

        if(auth == true) {
             return "success";
        }else {
            return "error";
        }
    }

    @GetMapping("/adminHome")
    public String adminHome( Model model )
    {
        return "AdminHome";
    }

    @ResponseBody
    @PostMapping("/userRegister")
    public String userRegister(@ModelAttribute("user") User user, Model model){

        String email = user.getEmail();
        String pw = user.getPassword();
        String fname = user.getFname();
        String lname = user.getLname();

        boolean reg = us.registerUser(fname, lname, email, pw);

        if(reg) {
            return "success";
        }else {
            return "error";
        }
    }
}
