function getFileSize(fileName) {
    const sizeInKB = fileName.size / 1024;
    const sizeInMB = sizeInKB / 1024;
  
    if (sizeInMB >= 1) {
      return `${sizeInMB.toFixed(2)} MB`;
    }
    return `${sizeInKB.toFixed(2)} KB`;
  }
  
function reduceQuality(imageFile, quality = 0.2) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = function (event) {
        const img = new Image();
  
        img.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const width = img.width;
          const height = img.height;
  
          if (img.width < 300) {
            quality = 0.8;
          }
  
          canvas.width = width;
          canvas.height = height;
  
          ctx.drawImage(img, 0, 0, width, height);
  
          canvas.toBlob(
            (blob) => {
              const reducedImageFile = new File([blob], imageFile.name, {
                type: "image/jpeg",
                lastModified: Date.now(),
              });
  
              resolve({
                imageFile: reducedImageFile,
                data: {
                  actualSize: getFileSize(imageFile),
                  reducedSize: getFileSize(reducedImageFile),
                },
              });
            },
            "image/jpeg",
            quality
          );
        };
  
        img.onerror = reject;
        img.src = event.target.result;
      };
  
      reader.onerror = reject;
  
      reader.readAsDataURL(imageFile);
    });
}
  
  export default reduceQuality;