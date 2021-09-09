package com.jcleonel.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jcleonel.dsdeliver.dto.OrderDTO;
import com.jcleonel.dsdeliver.dto.ProductDTO;
import com.jcleonel.dsdeliver.entities.Order;
import com.jcleonel.dsdeliver.entities.Product;
import com.jcleonel.dsdeliver.entities.enuns.OrderStatus;
import com.jcleonel.dsdeliver.repositories.OrderRepository;
import com.jcleonel.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = orderRepository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO orderDto) {
		Order order = new Order(null, orderDto.getAddress(), orderDto.getLatitude(), 
				orderDto.getLongitude(), Instant.now(), OrderStatus.PENDING);
		for (ProductDTO p : orderDto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		
		order = orderRepository.save(order);
		return new  OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
		Order order = orderRepository.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = orderRepository.save(order);
		return new OrderDTO(order);
	}
	
}
