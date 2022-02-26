package com.simplilearn.Phase4.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.simplilearn.Phase4.entity.User;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {


    //public User findByName(String name);
    List<User> findAll();

    User save(User user);
}
