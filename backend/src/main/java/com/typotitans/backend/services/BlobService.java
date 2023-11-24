package com.typotitans.backend.services;

import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.models.BlobItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class BlobService {

    private BlobServiceClient blobServiceClient;

    @Value("figureimages")
    private String containerName;

    public List<String> listBlobs() {
        List<String> blobNames = new ArrayList<>();
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(
                containerName);
        for (BlobItem blobItem : containerClient.listBlobs()) {
            blobNames.add(blobItem.getName());
        }
        return blobNames;
    }

    public String uploadBlob(String blobName, MultipartFile file) throws IOException {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(
                containerName);
        BlobClient blobClient = containerClient.getBlobClient(blobName);
        blobClient.upload(file.getInputStream(), file.getSize(), true);
        return blobClient.getBlobUrl();
    }

    public byte[] downloadBlob(String blobName) {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(
                containerName);
        BlobClient blobClient = containerClient.getBlobClient(blobName);
        return blobClient.downloadContent().toBytes();
    }

    public void deleteBlob(String blobName) {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(
                containerName);
        containerClient.getBlobClient(blobName).delete();
    }
}
