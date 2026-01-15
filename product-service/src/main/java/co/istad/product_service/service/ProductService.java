package co.istad.product_service.service;


import co.istad.product_service.domain.Product;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

public interface ProductService {

    List<Product> findAll();

//    Mono<Product> findById(Long id);
//
//    Mono<Product> create(Product product);
//
//    Mono<Product> update(Long id, Product product);
//
//    Mono<Void> delete(Long id);
}