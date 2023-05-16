const User = require("../../../../../models/user");
class SaveAppointment {
  constructor(id, data) {
    // do not execute rest of the code if the data is empty
    if (data.length === 0) return;
    this.id = id;
    this.data = data;
    this.saveAppointment();
  }
  async saveAppointment() {
    // Create new appointments array
    const newAppointments = this.data.map((appointment) => {
      return {
        Subject: appointment.Subject,
        Id: appointment.Id,
        StartTime: appointment.StartTime,
        EndTime: appointment.EndTime,
        IsAllDay: appointment.IsAllDay,
        Location: appointment.Location || "",
        Description: appointment.Description || "",
      };
    });
    // Empty the 'avaibility' array
    await User.findByIdAndUpdate(this.id, { $set: { avaibility: [] } });
    // Update the document
    const update = {
      $push: {
        avaibility: {
          $each: newAppointments,
        },
      },
    };

    await User.findByIdAndUpdate(this.id, update, { new: true });
  }
}
module.exports = SaveAppointment;
