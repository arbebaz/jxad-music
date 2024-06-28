package com.wineko.api.repository;

import com.wineko.api.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
    public interface OrderRepository extends JpaRepository<Orders, Integer> {

    }
