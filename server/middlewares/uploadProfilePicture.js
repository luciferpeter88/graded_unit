const fs = require("fs");
const path = require("path");
const util = require("util");

class ImageUploader {
  constructor(imageData, id) {
    this.outputDirectory = id;
    this.imageData = imageData;
    this.fileName = "profilePicture.png";
  }

  async saveImageFromData() {
    // Store the result of the replace operation
    const base64Data = this.imageData.replace(/^data:image\/\w+;base64,/, "");
    // convert back
    const imageBuffer = Buffer.from(base64Data, "base64");
    // function to write the picture
    const writeFileAsync = util.promisify(fs.writeFile);

    // Construct the output directory path
    const baseOutputDirectory = "./uploads/profile";
    const outputDirectory = path.join(
      baseOutputDirectory,
      this.outputDirectory
    );

    // Create the base and output directories if they don't exist
    fs.mkdirSync(baseOutputDirectory, { recursive: true });
    fs.mkdirSync(outputDirectory, { recursive: true });

    // Set the output file path and name
    const outputFile = path.join(outputDirectory, this.fileName);

    try {
      await writeFileAsync(outputFile, imageBuffer);
      const publicPath = path.relative("./uploads", outputFile);
      // provide the full path
      const imageFullPath = `http://localhost:4000/${publicPath}`;
      // return it
      return imageFullPath;
    } catch (error) {
      console.error("An error occurred while saving the image data:", error);
      throw new Error("An error occurred while saving the image data");
    }
  }
}

module.exports = ImageUploader;
