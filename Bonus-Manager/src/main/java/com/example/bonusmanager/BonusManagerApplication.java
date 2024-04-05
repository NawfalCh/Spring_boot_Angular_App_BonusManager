package com.example.bonusmanager;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Bonus Manager API",description = "Bonus Manager API implemented by Nawfal Cherif"))
public class BonusManagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(BonusManagerApplication.class, args);
    }

}
