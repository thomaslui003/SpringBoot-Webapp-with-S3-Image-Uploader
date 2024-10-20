package com.thomascode.s3;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;


import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.regions.Region;


@Configuration
public class S3Config {

    @Value("${aws.region}")
    private String awsRegion;
    
    @Bean
    public S3Client s3Client(){

        S3Client client = S3Client.builder()
                        .region(Region.of(awsRegion))
                        .build();
        return client;

    }
    
}
