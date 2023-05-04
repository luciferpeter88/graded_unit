const bcrypt = require("bcrypt");
const { connection } = require("mongoose");

class Authentification {
  constructor(userInputPassword, email) {
    this.userInputPassword = userInputPassword;
    this.email = email;
  }
  async getUser() {
    try {
      const data = await connection.db.collection("users").find().toArray();
      const user = data.find((user) => user.email === this.email);
      return user;
    } catch (error) {
      console.log(error);
      throw err;
    }
  }

  async verifyPassword() {
    const user = await this.getUser();
    if (user === undefined) {
      return false;
    }
    const storedHashedPassword = user.password;
    try {
      const isMatch = await bcrypt.compare(
        this.userInputPassword,
        storedHashedPassword
      );
      //   console.log("Passwords match:", isMatch);
      return isMatch;
    } catch (err) {
      //   console.error("Error verifying password:", err);
      throw err;
    }
  }
}

module.exports = Authentification;
