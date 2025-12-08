// Hook formater date.
export function useFormatDate() {
  const formatDate = (date?: Date | string, includeYear: boolean = false) => {
    const dateObj =
      date instanceof Date ? date : date ? new Date(date) : new Date();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Avr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate().toString().padStart(2, "0");
    const year = dateObj.getFullYear();

    return includeYear ? `${day} ${month} ${year}` : `${day} ${month}`;
  };

  return formatDate;
}