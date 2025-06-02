package com.example.BackendApp.repository;

import com.example.BackendApp.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
    List<Product> findByActiveTrue();
    
    List<Product> findByFeaturedTrue();
    
    List<Product> findByCategory(String category);
    
    List<Product> findByNameContainingIgnoreCase(String name);
    
    List<Product> findByActiveTrueAndFeaturedTrue();
    
    List<Product> findByActiveTrueOrderByPriceAsc();
    
    List<Product> findByActiveTrueOrderByPriceDesc();
} 