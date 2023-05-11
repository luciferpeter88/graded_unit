const bcrypt = require("bcrypt");
const { connection } = require("mongoose");

class Authentification {
  constructor(userInputPassword, email) {
    this.userInputPassword = userInputPassword;
    this.email = email;
  }
  // create a method to get the user from the database
  async getUser() {
    try {
      // get the users collection from the database and convert to an array
      const data = await connection.db.collection("users").find().toArray();
      // find the user with the user input email from the database
      const user = data.find((user) => user.email === this.email);
      return user;
    } catch (error) {
      console.log(error);
      throw err;
    }
  }

  async verifyPassword() {
    // invoke the getUser method to get the user from the database which is an object
    const user = await this.getUser();
    // if the user is not found, return false
    if (user === undefined) {
      return false;
    }
    // get the hashed password from the database
    const storedHashedPassword = user.password;
    try {
      // compare the user input password with the hashed password from the database and return it as a boolean(true or false)
      const isMatch = await bcrypt.compare(
        this.userInputPassword,
        storedHashedPassword
      );
      return isMatch;
    } catch (err) {
      //   console.error("Error verifying password:", err);
      throw err;
    }
  }
}

module.exports = Authentification;
