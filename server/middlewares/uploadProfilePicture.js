const fs = require("fs");
const path = require("path");

class ImageUploader {
  async saveImageFromData(imageData, filename) {
    imageData.replace(/^data:image\/\w+;base64,/, "");

    try {
      const buffer = this.convertBase64ToBuffer(imageData);
      const filePath = path.join("./uploads", filename);
      await fs.promises.writeFile(filePath, buffer);
      return filePath;
    } catch (error) {
      console.error("An error occurred while saving the image data:", error);
      throw new Error("An error occurred while saving the image data");
    }
  }
  convertBase64ToBuffer(base64) {
    return Buffer.from(base64, "base64");
  }
}

module.exports = ImageUploader;
