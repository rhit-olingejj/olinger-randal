package com.olinger.family.repository;


import com.olinger.family.entities.LoginDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository("com.olinger.family.repository.UserRepository")
public interface UserRepository extends JpaRepository<LoginDTO, String> {

}

