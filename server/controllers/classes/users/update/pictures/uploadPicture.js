const fs = require("fs");
const path = require("path");
const util = require("util");
const Picture = require("../../../../../models/pictures");
class UploadedPictures {
  constructor(userId, picture) {
    // if we don't have any pictures do not execute the rest of the code
    if (picture.length === 0 || !picture) {
      this.response = "";
      return;
    }
    // array of pictures
    this.uploadedPictures = [...picture];
    this.userId = userId;
    this.outputDirectory = userId;
    // array to store the image buffers
    this.imageBuffers = [];
    this.fileFormat = [];
    this.response = "";
    // convert the pictures to base64 and store them in the imageBuffers array
    this.convertToBase64();
  }

  convertToBase64() {
    this.uploadedPictures.forEach((picture) => {
      // get the file format
      const file = picture.match(/^data:image\/(\w+);base64,/);
      const fileFormat = file[1];
      // push the file format to the array
      this.fileFormat.push(fileFormat);
      // remnove the file format from the picture
      const base64Data = picture.replace(/^data:image\/\w+;base64,/, "");
      const imageBuffer = Buffer.from(base64Data, "base64");
      // push the image buffer to the array
      this.imageBuffers.push(imageBuffer);
    });
  }

  async saveImage() {
    // if we don't have any pictures do not execute the rest of the code
    if (!this.outputDirectory) {
      return;
    }
    const writeFileAsync = util.promisify(fs.writeFile);
    const baseOutputDirectory = "./uploads/allPictures";
    // output directory is "./uploads/allPictures/userId
    const outputDirectory = path.join(
      baseOutputDirectory,
      this.outputDirectory
    );
    fs.mkdirSync(baseOutputDirectory, { recursive: true });
    fs.mkdirSync(outputDirectory, { recursive: true });

    // map through the image buffers and save them
    const promises = this.imageBuffers.map(async (imageBuffer, i) => {
      // Set the output file path and name for each image
      const outputFile = path.join(
        outputDirectory,
        `${Date.now()}_${i}.${this.fileFormat[i]}`
      );

      try {
        // Write the image buffer to a file
        await writeFileAsync(outputFile, imageBuffer);
        const publicPath = path.relative("./uploads/allPictures", outputFile);
        // provide the full path to fetch the image
        const imageFullPath = `http://localhost:4000/${publicPath}`;

        new Picture({
          userId: this.userId,
          imagePath: imageFullPath,
          status: "pending",
        }).save();
        return "The image has been uploaded successfully";
      } catch (error) {
        console.error("An error occurred while saving the image data:", error);
        return "Wrong file format";
      }
    });
    // Wait for all promises to resolve and get the responses
    const responses = await Promise.all(promises);

    // Join the responses and return them
    this.response = responses.join(", ");
    return this.response;
  }
}

module.exports = UploadedPictures;
