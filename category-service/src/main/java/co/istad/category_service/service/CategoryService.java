package co.istad.category_service.service;


import co.istad.category_service.domain.Category;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

public interface CategoryService {

    List<Category> findAll();

//    Mono<Category> findById(Long id);
//
//    Mono<Category> create(Category category);
//
//    Mono<Category> update(Long id, Category category);
//
//    Mono<Void> delete(Long id);
}
