export const formatTimestamp = (timestampInSeconds: number) => {
  // Convert timestamp from seconds to milliseconds
  const timestampInMilliseconds = +timestampInSeconds;

  // Create current date object
  const currentDate = new Date();

  // Create target date object
  const targetDate = new Date(timestampInMilliseconds as number);
  // Set the time of the currentDate to 00:00:00 to ignore the time part
  currentDate.setHours(0, 0, 0, 0);

  // Set the time of the targetDate to 00:00:00 to ignore the time part
  targetDate.setHours(0, 0, 0, 0);

  // Calculate the difference in milliseconds between the target date and current date
  const timeDifference = targetDate.getTime() - currentDate.getTime();

  // Convert milliseconds to days
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  if (daysDifference === 0) {
    return "Bugün";
  } else if (daysDifference === 1) {
    return "Yarın";
  } else {
    // If the date is neither today nor tomorrow, return the actual date
    return targetDate.toLocaleDateString("tr-TR", {
      weekday: "long",
      // year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
};
