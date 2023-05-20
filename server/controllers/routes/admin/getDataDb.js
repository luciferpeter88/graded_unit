const { connection } = require("mongoose");

class GetDataDb {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }
  async getData() {
    const data = await connection.db
      .collection(this.collectionName)
      .find()
      .toArray();

    const filteredData = data
      .filter((user) => user.role !== "admin")
      .map((user) => {
        const { password, ...rest } = user;
        return rest;
      });

    return filteredData;
  }
}
module.exports = GetDataDb;
