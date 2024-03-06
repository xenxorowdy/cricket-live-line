import { Text } from "react-native";
import styled from "styled-components/native";

export const CusText = styled.Text`
  color: "white";
  font-weight: 400;
`;
export const CusLargeText = styled.Text`
  color: "white";
  font-size: "20px";
  font-weight: 500;
`;

export const formatDateAndTime = (inputDate) => {
  const currentDate = new Date();
  const inputDateTime = new Date(inputDate);
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (isToday(inputDateTime, currentDate)) {
    return formatTime(inputDateTime, userTimeZone);
  } else if (isTomorrow(inputDateTime, currentDate)) {
    return "Tomorrow " + formatTime(inputDateTime, userTimeZone);
  } else if (isYesterday(inputDateTime, currentDate)) {
    return "Yesterday " + formatTime(inputDateTime, userTimeZone);
  } else {
    return formatDateTime(inputDateTime, userTimeZone);
  }
};

const isToday = (inputDate, currentDate) => {
  return (
    inputDate.getDate() === currentDate.getDate() &&
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getFullYear() === currentDate.getFullYear()
  );
};

const isTomorrow = (inputDate, currentDate) => {
  const tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1);
  return (
    inputDate.getDate() === tomorrow.getDate() &&
    inputDate.getMonth() === tomorrow.getMonth() &&
    inputDate.getFullYear() === tomorrow.getFullYear()
  );
};

const isYesterday = (inputDate, currentDate) => {
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  return (
    inputDate.getDate() === yesterday.getDate() &&
    inputDate.getMonth() === yesterday.getMonth() &&
    inputDate.getFullYear() === yesterday.getFullYear()
  );
};

const formatTime = (inputDate, timeZone) => {
  const timeString = inputDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: timeZone,
  });
  return `Today ${timeString}`;
};

const formatDateTime = (inputDate, timeZone) => {
  const dateTimeString = inputDate.toLocaleString("en-US", {
    timeZone: timeZone,
  });
  return dateTimeString;
};

