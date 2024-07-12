import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';

export default function handler(req, res) {
    const accountName = 'mavericksstorage';
    const accountKey = 'sv=2022-11-02&ss=bfqt&srt=o&sp=rwdlacupiytfx&se=2024-06-14T19:06:47Z&st=2024-06-14T11:06:47Z&spr=https&sig=Z6ZR3zYJAxo3mUeEKZqH4b55WkipofIvLn2njaEC%2FYQ%3D';
    const containerName = 'general';

  const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
  const blobServiceClient = new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    sharedKeyCredential
  );

  const containerClient = blobServiceClient.getContainerClient(containerName);
  const startDate = new Date();
  const expiryDate = new Date(startDate);
  expiryDate.setMinutes(startDate.getMinutes() + 120); // 2 horas de validez

  const sharedAccessPolicy = {
    startsOn: startDate,
    expiresOn: expiryDate,
    permissions: 'rwd'
  };

  const sasToken = containerClient.generateSasUrl({
    containerName,
    permissions: sharedAccessPolicy.permissions,
    startsOn: sharedAccessPolicy.startsOn,
    expiresOn: sharedAccessPolicy.expiresOn
  });

  res.status(200).json({ sasToken });
}
