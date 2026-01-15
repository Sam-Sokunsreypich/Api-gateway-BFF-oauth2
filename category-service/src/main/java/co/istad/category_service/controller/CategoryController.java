package co.istad.category_service.controller;


import co.istad.category_service.domain.Category;
import co.istad.category_service.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;


    @GetMapping
    public List<Category> getAll() {
        return categoryService.findAll();
    }

//    @GetMapping("/{id}")
//    public Mono<Category> getById(@PathVariable Long id) {
//        return categoryService.findById(id);
//    }
//
//    @PostMapping
//    public Mono<Category> create(@RequestBody Category category) {
//        return categoryService.create(category);
//    }
//
//    @PutMapping("/{id}")
//    public Mono<Category> update(@PathVariable Long id, @RequestBody Category category) {
//        return categoryService.update(id, category);
//    }
//
//    @DeleteMapping("/{id}")
//    public Mono<Void> delete(@PathVariable Long id) {
//        return categoryService.delete(id);
//    }
}
