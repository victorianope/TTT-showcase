export const getRoleColor = (role: string) => {
  switch (role) {
    case "detective":
      return "#5D6D7E";
    case "traitor":
      return "#8D021F";
    case "neutral_assassin":
      return "#581845";
    case "neutral":
      return "#F0B27A";
    case "innocent":
      return "#8CDBA9";
    default:
      return "white";
  }
};
