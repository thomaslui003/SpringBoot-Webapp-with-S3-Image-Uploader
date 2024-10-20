package com.thomascode.s3;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.context.properties.ConfigurationProperties;


@Configuration 
@ConfigurationProperties(prefix = "aws.s3.buckets")
public class S3Buckets {

    private String customer;

    public String getCustomer(){
        return customer;

    }

    public void setCustomer(String customer){
        this.customer = customer;

    }
    
}