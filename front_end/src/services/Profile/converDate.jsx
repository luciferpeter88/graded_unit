class DateConverter {
  convert(arg) {
    const dateStart = arg.StartTime;
    const dateEnd = arg.EndTime;
    const dateEndObject = new Date(dateStart);
    const dateStartObject = new Date(dateEnd);
    const convertedDateEnd = `${dateEndObject.getFullYear()}, ${
      dateEndObject.getMonth() + 1
    }, ${dateEndObject.getDate()}`;
    const convertedDateStart = `${dateStartObject.getFullYear()}, ${
      dateStartObject.getMonth() + 1
    }, ${dateStartObject.getDate()}`;
    return {
      ...arg,
      StartTime: convertedDateEnd,
      EndTime: convertedDateStart,
    };
  }
}

export default DateConverter;
