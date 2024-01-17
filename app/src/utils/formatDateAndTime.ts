interface IDatetime {
    date: string;
    time: string;
}

export const formatDateAndTime = (date: string) => {
  if (date) {
    const formattedDate = new Date(date).toLocaleDateString();
    const formattedTime = new Date(date).toLocaleTimeString();
    const datetime:IDatetime = {
      date: formattedDate,
      time: formattedTime,
    };
    return datetime
  }
};
