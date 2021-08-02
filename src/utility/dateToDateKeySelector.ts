class DateToDateKeySelector {
  public static convertDateToDateKeySelector(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}${month}${day}`;
  }

  public static convertDateStringToStringSelector(date: string) {
    const taskDate = new Date(date);
    return `${taskDate.getFullYear()}${taskDate.getMonth()}${taskDate.getDate()}`;
  }
}

export default DateToDateKeySelector;