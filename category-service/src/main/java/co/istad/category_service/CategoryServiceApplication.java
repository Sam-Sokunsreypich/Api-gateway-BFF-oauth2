package co.istad.category_service;

import co.istad.category_service.domain.Category;
import co.istad.category_service.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@RequiredArgsConstructor
public class CategoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CategoryServiceApplication.class, args);
	}
	private final CategoryRepository categoryRepository;

	@Bean
	CommandLineRunner initCategories() {
		return args -> {
			categoryRepository.save(new Category(null, "Electronics"));
			categoryRepository.save(new Category(null, "Accessories"));
			categoryRepository.save(new Category(null, "Office"));
		};
	}

}
