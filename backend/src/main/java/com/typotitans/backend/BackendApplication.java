package com.typotitans.backend;

import com.microsoft.applicationinsights.attach.ApplicationInsights;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		ApplicationInsights.attach();
		SpringApplication.run(BackendApplication.class, args);
	}

}
