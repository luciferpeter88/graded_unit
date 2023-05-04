const User = require("../models/user");
const bcrypt = require("bcrypt");
// create a class for creating a new user and save to the database
class NewUser {
  constructor(fName, lName, email, password) {
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.password = password;
    this.role = "user";
    this.status = "pending";
    this.userName = "";
    this.phoneNumber = "";
    this.profilePicture = "";
    this.avaibility = [];
  }
  async hashPassword() {
    try {
      const saltRounds = 10; // You can adjust this number based on your security requirements
      const hashedPassword = await bcrypt.hash(this.password, saltRounds);
      return hashedPassword;
    } catch (err) {
      console.error("Error hashing password:", err);
      throw err;
    }
  }

  async createUser() {
    const hashedPassword = await this.hashPassword();
    try {
      const newUser = new User({
        firstName: this.fName,
        lastName: this.lName,
        email: this.email,
        password: hashedPassword,
        role: this.role,
        status: this.status,
        userName: this.userName,
        phoneNumber: this.phoneNumber,
        profilePicture: this.profilePicture,
        avaibility: this.avaibility,
      });
      await newUser.save();
    } catch (error) {
      console.log(error);
      throw err;
    }
  }
}

module.exports = NewUser;
