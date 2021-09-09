package com.jcleonel.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jcleonel.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
