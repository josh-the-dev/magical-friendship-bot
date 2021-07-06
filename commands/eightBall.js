export const eightBall = () => {
  const randomNumber = Math.random();
  const multiplied = randomNumber * 10;
  const floored = Math.floor(multiplied);
  switch (floored) {
    case 0:
    case 1:
    case 2:
    case 3:
      return "There is a chance";
    case 4:
    case 5:
      return "No way will that happen";
    case 6:
    case 7:
      return "Not sure tbh";
    case 8:
    case 9:
      return "Yes sir";
    case 10:
      return "Nope";
  }
};

export default eightBall;
