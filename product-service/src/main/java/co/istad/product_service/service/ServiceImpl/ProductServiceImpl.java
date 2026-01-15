package co.istad.product_service.service.ServiceImpl;

import co.istad.product_service.domain.Product;
import co.istad.product_service.repository.ProductRepository;
import co.istad.product_service.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository repository;

    @Override
    public List<Product> findAll() {
        return repository.findAll().stream().toList();
    }

//    @Override
//    public Mono<Product> findById(Long id) {
//        return repository.findById(id)
//                .switchIfEmpty(Mono.error(new RuntimeException("Product not found")));
//    }
//
//    @Override
//    public Mono<Product> create(Product product) {
//        return repository.save(product);
//    }
//
//    @Override
//    public Mono<Product> update(Long id, Product product) {
//        return repository.findById(id)
//                .switchIfEmpty(Mono.error(new RuntimeException("Product not found")))
//                .flatMap(existing -> {
//                    existing.setName(product.getName());
//                    existing.setPrice(product.getPrice());
//                    return repository.save(existing);
//                });
//    }
//
//    @Override
//    public Mono<Void> delete(Long id) {
//        return repository.deleteById(id);
//    }
}
