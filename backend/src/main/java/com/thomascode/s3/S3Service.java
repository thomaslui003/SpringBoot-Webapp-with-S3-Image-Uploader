package com.thomascode.s3;
import org.springframework.stereotype.Service;
import java.io.IOException;


import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.core.ResponseInputStream;

import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;


@Service
public class S3Service {

    //two method, one to upload and another to download objects
    //the s3client allows us to interact with the s3 services

    private final S3Client s3;

    //constructor for s3
    public S3Service(S3Client s3){
        this.s3 = s3;

    }

    //method for storing specific file in buckets
    public void putObject(String bucketName, String key, byte[] file){

        PutObjectRequest objectRequest = PutObjectRequest.builder()
                        .bucket(bucketName)
                        .key(key)
                        .build();

            //RequestBody is the actual file in byte format
            s3.putObject(objectRequest, RequestBody.fromBytes(file));

        
    }

    public byte[] getObject(String bucketName, String key){

        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                        .bucket(bucketName)
                        .key(key)
                        .build();

        ResponseInputStream<GetObjectResponse> res = s3.getObject(getObjectRequest);

        try{
            
            return res.readAllBytes();

        }catch (IOException e){

            throw new RuntimeException(e);
            
        }
        


    }


    
}
