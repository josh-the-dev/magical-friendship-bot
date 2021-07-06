export const fridayCheck = () => {
  const date = new Date();
  const day = date.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (day[days] !== "Friday") {
    const pepeHands = client.emojis.cache.find(
      (emoji) => emoji.name === "pepehands"
    );
    return `No it is not Friday ${pepeHands.toString()}`;
  } else {
    const rod = client.emojis.cache.find((emoji) => emoji.name === "rod");
    return `Yes it's Friday ${rod}`;
  }
};

export default fridayCheck;
