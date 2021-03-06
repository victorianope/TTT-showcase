export const getRoleColor = (lightMode: boolean, role: string) => {
  switch (role) {
    case 'detective':
      return lightMode ? '#2871CC' : '#5099F4';
    case 'traitor':
      return lightMode ? '#DA012D' : '#DA012D';
    case 'neutral_killer':
      return lightMode ? '#581845' : '#A44CD3';
    case 'neutral':
      return lightMode ? '#EE8A65' : '#F0B27A';
    case 'innocent':
      return lightMode ? '#62A87C' : '#8CDBA9';
    case 'other':
      return lightMode ? '#00B4D8' : '#00B4D8';
    default:
      return lightMode ? 'white' : 'white';
  }
};
