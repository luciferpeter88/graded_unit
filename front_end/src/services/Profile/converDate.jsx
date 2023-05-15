class DateConverter {
  convert(arg) {
    const dateStart = arg.StartTime;
    const dateEnd = arg.EndTime;
    const dateEndObject = new Date(dateStart);
    const dateStartObject = new Date(dateEnd);
    const convertedDateEnd = `${dateEndObject.getFullYear()}, ${dateEndObject.getMonth()}, ${dateEndObject.getDate()}`;
    const convertedDateStart = `${dateStartObject.getFullYear()}, ${dateStartObject.getMonth()}, ${dateStartObject.getDate()}`;
    return {
      ...arg,
      StartTime: convertedDateStart,
      EndTime: convertedDateEnd,
    };
  }
}

export default DateConverter;
