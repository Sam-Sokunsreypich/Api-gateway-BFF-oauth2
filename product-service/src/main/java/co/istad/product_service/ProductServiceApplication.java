package co.istad.product_service;

import co.istad.product_service.domain.Product;
import co.istad.product_service.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@RequiredArgsConstructor
public class ProductServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductServiceApplication.class, args);
	}
	private final ProductRepository productRepository;

	@Bean
	CommandLineRunner initProducts() {
		return args -> {
			productRepository.save(new Product(null, "Laptop", 1200.0));
			productRepository.save(new Product(null, "Phone", 800.0));
			productRepository.save(new Product(null, "Mouse", 25.0));
		};
	}

}
