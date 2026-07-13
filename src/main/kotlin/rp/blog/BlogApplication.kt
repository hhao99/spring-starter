package rp.blog

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean

@SpringBootApplication
class BlogApplication {
	@Bean
	fun init() = CommandLineRunner {
		println("===> Application initializing...")
		
		println("===> Application initialized ")
	}
}

fun main(args: Array<String>) {
	runApplication<BlogApplication>(*args)
}

