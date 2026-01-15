package co.istad.category_service.service.serviceImpl;

import co.istad.category_service.domain.Category;
import co.istad.category_service.repository.CategoryRepository;
import co.istad.category_service.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository repository;

    @Override
    public List<Category> findAll() {
        return repository.findAll().stream().toList();
    }

//    @Override
//    public Mono<Category> findById(Long id) {
//        return Mono.fromCallable(() ->
//                repository.findById(id)
//                        .orElseThrow(() -> new RuntimeException("Category not found"))
//        ).subscribeOn(Schedulers.boundedElastic());
//    }
//
//    @Override
//    public Mono<Category> create(Category category) {
//        return Mono.fromCallable(() ->
//                repository.save(category)
//        ).subscribeOn(Schedulers.boundedElastic());
//    }
//
//    @Override
//    public Mono<Category> update(Long id, Category category) {
//        return Mono.fromCallable(() -> {
//            Category existing = repository.findById(id)
//                    .orElseThrow(() -> new RuntimeException("Category not found"));
//
//            existing.setName(category.getName());
//
//            return repository.save(existing);
//        }).subscribeOn(Schedulers.boundedElastic());
//    }
//
//    @Override
//    public Mono<Void> delete(Long id) {
//        return Mono.fromRunnable(() ->
//                repository.deleteById(id)
//        ).subscribeOn(Schedulers.boundedElastic()).then();
//    }
}
