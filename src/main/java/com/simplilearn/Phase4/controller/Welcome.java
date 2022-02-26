package com.simplilearn.Phase4.controller;

import com.simplilearn.Phase4.entity.User;
import com.simplilearn.Phase4.repository.UserRepository;
import com.simplilearn.Phase4.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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

    @PostMapping("/adminHome")
    public String adminHome(@ModelAttribute("user") User user, Model model){


        String email = user.getEmail();
        String pw = user.getPassword();
        System.out.println("Email: " + email);
        System.out.println("PW: " + pw);

        boolean auth = us.authenticateUser(email, pw);

        System.out.println("Auth: " + auth);

        //model.addAttribute("user", user);

        System.out.println("TEst");

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        //return modelAndView;
        return "AdminHome";
        //return "redirect:/adminHome";
        /*if(auth == true) {

        }else {
            //model.addAttribute("error", "Password invalid");
            return "index";
        }*/

        //return "AdminHome";
    }

    @GetMapping("/adminHome")
    public String adminHome(Model model){
        return "AdminHome";
    }
}
