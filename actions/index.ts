export const trimAddreses = (str: string): string => {
  if (str?.length <= 6) {
    return str; // String 6 karakterden kısa ise doğrudan döndür
  }

  const firstThree = str?.substring(0, 3); // Baştan ilk 3 harfi al
  const lastThree = str?.substring(str?.length - 3); // Sondan son 3 harfi al

  return `${firstThree}...${lastThree}`;
};
