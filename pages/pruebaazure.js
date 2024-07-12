"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { BlobServiceClient } from '@azure/storage-blob';
import reduceQuality from '@/components/common/reduceQuality';

const Pruebaazure = () => {
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    // Obtener SAS token desde tu API en Next.js
    const response = await axios.get('/api/generateSasToken');
    console.log("response", response)
    const { sasToken } = response.data;

    console.log("sasToken", sasToken)

    const { imageFile, data } = await reduceQuality(file);

    const blobServiceClient = new BlobServiceClient("https://mavericksstorage.blob.core.windows.net/?sv=2022-11-02&ss=bfqt&srt=o&sp=rwdlacupiytfx&se=2024-06-14T19:06:47Z&st=2024-06-14T11:06:47Z&spr=https&sig=Z6ZR3zYJAxo3mUeEKZqH4b55WkipofIvLn2njaEC%2FYQ%3D");
    const containerClient = blobServiceClient.getContainerClient('general');
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);

    await blockBlobClient.uploadBrowserData(imageFile);

    setUploadedUrl(blockBlobClient.url);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir archivo</button>
      {uploadedUrl && <p>Archivo subido: <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">{uploadedUrl}</a> <img src={uploadedUrl} /></p>}

    </div>
  );
};

export default Pruebaazure;
