function calculateTimeAgo(submissionTime) {
  const currentTime = Date.now();
  const timeDifference = currentTime - submissionTime;

  // Convert milliseconds to seconds, minutes, hours, or days
  if (timeDifference < 60000) {
    return `${Math.floor(timeDifference / 1000)}s`;
  } else if (timeDifference < 3600000) {
    return `${Math.floor(timeDifference / 60000)}m`;
  } else if (timeDifference < 86400000) {
    return `${Math.floor(timeDifference / 3600000)}h`;
  } else {
    return `${Math.floor(timeDifference / 86400000)}d`;
  }
}

export default calculateTimeAgo;
